import { NextResponse, type NextRequest } from "next/server";

const authRoutes = ["/store/login", "/store/signup"];

function isAdminAuthenticated(req: NextRequest) {
  const token = req.cookies.get("adminAccessToken")?.value;
  const user = req.cookies.get("admin")?.value;
  const isAdmin = JSON.parse(user || "{}").isAdmin;
  return Boolean(token && isAdmin);
}

function isUserAuthenticated(req: NextRequest) {
  const token = req.cookies.get("accessToken")?.value;
  return Boolean(token);
}

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = url;

  const userIsAuthenticated = isUserAuthenticated(request);

  const isAuthRoute = authRoutes.includes(pathname);

  // Redirect user to store home page if trying to access auth route and authenticated
  if (isAuthRoute && userIsAuthenticated) {
    return NextResponse.redirect(new URL("/store", request.url));
  }

  // execute below code only for path that starts with admin but not /admin/login path
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    if (!isAdminAuthenticated(request)) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }
  //if admin is authenticated and try to access the login page then redirect to product table page
  if (
    isAdminAuthenticated(request) &&
    ["/admin/login", "/admin"].includes(pathname)
  ) {
    return NextResponse.redirect(new URL("/admin/product", request.url));
  }
}

// path for which the middleware will be called
export const config = {
  // matcher: ["/admin", "/admin/((?!login).*)"],
  matcher: ["/((?!_next|static|api|favicon.ico).*)"],
};
