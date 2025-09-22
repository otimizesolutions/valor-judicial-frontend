import { fromUnixTime, isAfter } from "date-fns";
import { jwtDecode } from "jwt-decode";
import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

import { env } from "@/env";

import { refreshToken as refresh } from "@/http/auth/refresh";
import { signIn } from "@/http/auth/sign-in";
import { AxiosError } from "axios";

async function refreshToken(token: JWT): Promise<JWT> {
  try {
    const response = await refresh({
      refresh: token.refresh,
    });

    if (response.status !== 200) {
      return { ...token, error: "RefreshAccessTokenError" };
    }

    if (response.data.access) {
      token = {
        ...token,
        access: response.data.access,
      };
    }
  } catch {
    return { ...token, error: "RefreshAccessTokenError" };
  }

  return token;
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const { email, password } = credentials;

        try {
          const response = await signIn({
            email,
            password,
          });
          if (response.status !== 200) {
            return {
              error: {
                status: response.status,
                data: response.data,
              },
              id: 0,
              access: "",
              refresh: "",
              user_info: {
                id: 0,
              },
            };
          }

          return {
            access: response.data.access,
            refresh: response.data.refresh,
            id: response.data.user.id,
            user_info: {
              id: response.data.user.id,
            },
          };
        } catch (error: unknown) {
          if (error instanceof AxiosError) {
            return {
              error: {
                status: error?.response?.status,
                data: error?.response?.data,
              },
              id: 0,
              access: "",
              refresh: "",
              user_info: {
                id: 0,
              },
            };
          }
        }
        return {
          error: {
            status: "",
            data: { detail: "Erro desconhecido!" },
          },
          id: 0,
          access: "",
          refresh: "",
          user_info: {
            id: 0,
          },
        };
      },
    }),
  ],

  callbacks: {
    async signIn({ user }) {
      if (user.error) {
        throw new Error(JSON.stringify(user.error.data));
      }
      return true;
    },

    async jwt({ token, user, trigger, session, account }) {
      if (account?.provider === "credentials") {
        if (user) {
          const access = user.access;
          const refresh = user.refresh;
          const userInfo = {
            id: user.user_info.id,
          };

          token = {
            ...token,
            access,
            refresh,
            user: userInfo,
          };
        }
      }

      if (trigger === "update") {
        return { ...token, ...session };
      }

      const access = jwtDecode(token.access);

      const currentTime = new Date();
      const accessExpTime = access.exp ? fromUnixTime(access.exp) : null;

      if (accessExpTime && isAfter(currentTime, accessExpTime)) {
        const refreshedToken = await refreshToken(token);

        token = refreshedToken;
      }

      return token;
    },

    async session({ token, session }) {
      session.access = token.access;
      session.refresh = token.refresh;
      session.error = token.error;

      return session;
    },
  },
  secret: env.NEXTAUTH_SECRET,
  jwt: {
    secret: env.NEXTAUTH_SECRET,
  },
  pages: { signIn: "/auth/sign-in" },
});

export { handler as GET, handler as POST };
