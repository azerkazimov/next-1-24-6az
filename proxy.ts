import { NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";
import { getToken } from "next-auth/jwt";

const intlMiddleware = createIntlMiddleware(routing);

const protectedRoutes = ["/dashboard", "/profile"];

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Get the session token (Edge compatible)
  const session = await getToken({ 
    req: request, 
    secret: process.env.NEXTAUTH_SECRET 
  });
  
  const isAuthenticated = !!session; // true or false

  // 2. Determine the locale from the pathname (or fallback to default)
  const pathnameHasLocale = routing.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  const locale = pathnameHasLocale 
    ? pathname.split("/")[1] 
    : routing.defaultLocale;

  const pathnameWithoutLocale = pathnameHasLocale
    ? pathname.replace(new RegExp(`^/(${routing.locales.join("|")})`), "") || "/"
    : pathname;

  // 3. Logic: If NOT authenticated and trying to access a protected route
  if (protectedRoutes.includes(pathnameWithoutLocale) && !isAuthenticated) {
    const signInUrl = new URL(`/${locale}/auth/signin`, request.url);
    return NextResponse.redirect(signInUrl);
  }

  // 4. Logic: If authenticated and trying to access login/landing (Optional)
  // Prevent infinite loops by checking if we are already on a protected page
  if (isAuthenticated && pathnameWithoutLocale === "/auth/signin") {
     return NextResponse.redirect(new URL(`/${locale}/dashboard`, request.url));
  }

  // 5. Let next-intl handle the routing/localization
  return intlMiddleware(request);
}

export const config = {
  // Matcher ignoring internal files and API routes
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};