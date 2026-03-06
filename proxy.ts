import { NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

const intlMiddleware = createIntlMiddleware(routing);

const isProtectedRoute = ["/dashboard", "/profile"];

export default function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const isAuthenticated = false;

    if (isAuthenticated) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    const pathnameWithoutLocale = pathname.replace(/^\/(en|az)/, "") || "/";
    if (isProtectedRoute.includes(pathnameWithoutLocale) && !isAuthenticated) {
        return NextResponse.redirect(new URL("/signin", request.url));
    }

    return intlMiddleware(request);
}

export const config = {
    matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
