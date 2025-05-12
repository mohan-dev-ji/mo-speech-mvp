import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/pageslanding",
    "/api/pecs",
    "/api/loadPecsLists",
    "/api/savePecsLists",
    "/api/contact"
  ],
  afterAuth(auth, req) {
    // Handle root path redirection
    if (req.nextUrl.pathname === "/") {
      if (auth.userId) {
        return Response.redirect(new URL("/pages/home", req.url));
      } else {
        return Response.redirect(new URL("/pages/landing", req.url));
      }
    }
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}; 