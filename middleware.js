import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
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
      }
      // If not authenticated, stay on the landing page (root)
      return;
    }
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}; 