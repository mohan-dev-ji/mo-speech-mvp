import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/landing",
    "/api/pecs",
    "/api/loadPecsLists",
    "/api/savePecsLists",
    "/_next",
    "/favicon.ico",
    "/icons/(.*)",
    "/audio/(.*)",
    "/pecs/(.*)"
  ],
  afterAuth(auth, req) {
    // If the user is not signed in and the route is not public, redirect to landing
    if (!auth.userId && !auth.isPublicRoute) {
      const landingUrl = new URL("/landing", req.url);
      return Response.redirect(landingUrl);
    }
    // If the user is signed in and trying to access the landing page, redirect to home
    if (auth.userId && req.nextUrl.pathname === "/landing") {
      const homeUrl = new URL("/", req.url);
      return Response.redirect(homeUrl);
    }
  }
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}; 