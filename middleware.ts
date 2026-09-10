import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "./lib/dictionaries";

const PUBLIC_FILE = /\.(.*)$/;

// Next generates these from app/icon.tsx, app/apple-icon.tsx, etc. They carry no
// file extension, so PUBLIC_FILE misses them and they must be listed explicitly
// or the locale redirect below turns the favicon into a 308 to /es/icon.
const METADATA_ROUTES = new Set([
  "/icon",
  "/apple-icon",
  "/opengraph-image",
  "/twitter-image",
  "/sitemap.xml",
  "/robots.txt",
  "/manifest.webmanifest",
]);

function getPreferredLocale(request: NextRequest): string {
  const cookieLocale = request.cookies.get("locale")?.value;
  if (cookieLocale && locales.includes(cookieLocale as "es" | "en" | "fr")) {
    return cookieLocale;
  }

  const acceptLang = request.headers.get("accept-language") ?? "";
  if (acceptLang.toLowerCase().startsWith("fr")) return "fr";
  if (acceptLang.toLowerCase().startsWith("en")) return "en";
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    PUBLIC_FILE.test(pathname) ||
    METADATA_ROUTES.has(pathname)
  ) {
    return;
  }

  const pathnameHasLocale = locales.some(
    (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`
  );

  if (pathnameHasLocale) {
    const locale = pathname.split("/")[1];
    const response = NextResponse.next();
    response.headers.set("x-locale", locale);
    return response;
  }

  const locale = getPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: [
    "/((?!_next|api|icon$|apple-icon$|opengraph-image$|twitter-image$|.*\\..*).*)",
  ],
};
