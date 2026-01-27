import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_DOMAIN = "www.spst.it";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = url;
  const hostname = request.headers.get("host") || "";

  // TASK 1: WWW vs NON-WWW + HTTP → HTTPS
  // Remove port if present for comparison
  const cleanHost = hostname.split(":")[0];
  
  // Redirect to canonical domain (www.spst.it) with HTTPS
  if (cleanHost && cleanHost !== CANONICAL_DOMAIN) {
    // Check if it's a spst.it domain (without www or with different subdomain)
    if (cleanHost === "spst.it" || (cleanHost.endsWith(".spst.it") && cleanHost !== CANONICAL_DOMAIN)) {
      url.host = CANONICAL_DOMAIN;
      url.protocol = "https:";
      // Preserve pathname and search params
      return NextResponse.redirect(url, 301);
    }
  }

  // Force HTTPS (only if not already on canonical domain redirect)
  if (url.protocol === "http:" && cleanHost === CANONICAL_DOMAIN) {
    url.protocol = "https:";
    return NextResponse.redirect(url, 301);
  }

  // TASK 2: Trailing slash removal
  // Redirect /path/ → /path (except root)
  if (pathname !== "/" && pathname.endsWith("/")) {
    url.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(url, 301);
  }

  // TASK 3: Index pages redirect
  // Redirect /index.html and /index.php to /
  if (pathname === "/index.html" || pathname === "/index.php") {
    url.pathname = "/";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)",
  ],
};
