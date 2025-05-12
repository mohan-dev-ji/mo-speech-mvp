import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/landing",
    "/api/pecs",
    "/api/loadPecsLists",
    "/api/savePecsLists",
    "/api/contact"
  ],
  afterAuth(auth, req) {
    // Handle root path redirection
    if (req.nextUrl.pathname === "/") {
      if (auth.userId) {
        return Response.redirect(new URL("/home", req.url));
      } else {
        return Response.redirect(new URL("/landing", req.url));
      }
    }
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}; 