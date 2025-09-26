import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

import { env } from "./env";

export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/app/:path*", // Matches all routes starting with /app
  ],
};

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const url = request.nextUrl.pathname;

  if ((!token || token.error) && url !== '/auth/sign-in') {
    return NextResponse.redirect(`${env.NEXTAUTH_URL}/auth/sign-in`);
  }
  
  if (token && token.error === "RefreshAccessTokenError") {
    return NextResponse.redirect(`${env.NEXTAUTH_URL}/auth/sign-in`);
  }

  // TODO: outras validações.

  return NextResponse.next();
}
