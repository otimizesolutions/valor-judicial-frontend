import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

import { env } from "./env";

export const config = {
  matcher: [
    "/example/:path*", // Matches all routes starting with /app
    "/dashboard/:path*",
    "/companies/:path*",
    "/"
  ],
};

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });

  if (!token || token.error){
    return NextResponse.redirect(`${env.NEXTAUTH_URL}/auth/sign-in`);
  }
  
  if (
    token &&
    token.error === "RefreshAccessTokenError" 
  ) {
    return NextResponse.redirect(`${env.NEXTAUTH_URL}/auth/sign-in`);
  }

  // TODO: outras validações.

  return NextResponse.next();
}