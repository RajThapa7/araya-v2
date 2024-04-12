import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("adminAccessToken")?.value;
  const user = request.cookies.get("admin")?.value;
  const isAdmin = JSON.parse(user || "").isAdmin;

  if (!accessToken || !isAdmin) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }
}

// path for which the middleware will be called
export const config = {
  matcher: ["/admin/((?!login).*)"],
};
