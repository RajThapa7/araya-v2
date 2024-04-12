import { PropsWithChildren } from "react";

const RouteGuard = ({ children }: PropsWithChildren) => {
  const publicRoutes = ["/", "/store", ""];
  const protectedRoutes = ["/store/wishlist", "/store/cart", "/store/checkout"];
  return <div>RouteGuard</div>;
};

export default RouteGuard;
