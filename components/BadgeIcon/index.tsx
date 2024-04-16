"use client";
import { useAuth } from "@/Providers/AuthProvider";
import useFetchCart from "@/api/hooks/cart/useFetchCart";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next-nprogress-bar";

export function BadgeIcon() {
  const router = useRouter();
  const { user } = useAuth();
  const { data } = useFetchCart(user?._id || "");

  const cartCount = data?.products.length || 0;

  return (
    <div className="relative group" onClick={() => router.push("/store/cart")}>
      <ShoppingCartIcon
        width={25}
        height={30}
        className="text-gray-500 transition-smooth group-hover:text-accent"
      />
      {cartCount > 0 && (
        <div className="absolute bg-accent -top-2 -right-3 w-6 h-6 rounded-full flex items-center justify-center">
          <p className="text-xs font-semibold text-white">{cartCount}</p>
        </div>
      )}
    </div>
  );
}
