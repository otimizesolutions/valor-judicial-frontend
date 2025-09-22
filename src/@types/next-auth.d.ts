export type NextAuthUser = {
  id: number;
};

declare module "next-auth" {
  interface Session {
    user: NextAuthUser;
    access: string;
    refresh: string;
    expires: string;
    error?: string;
  }

  interface User {
    access: string;
    refresh: string;
    user_info: NextAuthUser;
    id: number;
    error?: {
      status: number;
      data: unknown;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    access: string;
    refresh: string;
    user: NextAuthUser;
    sub: string;
    iat: number;
    exp: number;
    jti: string;
    error?: string;
  }
}
