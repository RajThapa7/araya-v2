import { fetchProductData } from "@/features/store/(home)/server/initialDataFetch";
import CartItemContainer from "@/features/store/cart/CartItemContainer";
import { fetchCartItems } from "@/features/store/cart/server/fetchInitialItems";
import PicksForYou from "@/features/store/wishlist/PicksForYou";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const Cart = async () => {
  const initialData = await fetchProductData();
  const cookie = cookies();

  const token = cookie.get("accessToken")?.value;
  const isLoggedIn = !!token;

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col items-center gap-8">
        <p className="text-xl font-semibold text-header md:text-2xl">
          Login to access your cart
        </p>
        <div className="relative aspect-video w-72 md:w-96">
          <Image
            src={require("@/public/login.svg")}
            alt="login"
            fill
            className="h-full w-full object-contain"
          />
        </div>

        <Link
          href={"/store/login?redirect=/store/cart"}
          className="rounded-md bg-accent px-6 py-3 text-white"
        >
          Login
        </Link>
      </div>
    );
  }

  const user = cookie.get("user");
  const userId = JSON.parse(user?.value || "")?._id;

  const initialCartData = await fetchCartItems(userId);

  return (
    <div className="flex flex-col gap-20">
      <CartItemContainer initialData={initialCartData} userId={userId} />
      <PicksForYou initialData={initialData} />
    </div>
  );
};

export default Cart;
