import { fetchProductData } from "@/features/store/(home)/server/initialDataFetch";
import PicksForYou from "@/features/store/wishlist/PicksForYou";
import WishlistItems from "@/features/store/wishlist/WishlistItems";
import { fetchWishlistItems } from "@/features/store/wishlist/server/fetchInitialItems";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const Category = async () => {
  const initialData = await fetchProductData();
  const cookie = cookies();

  const token = cookie.get("accessToken")?.value;
  const isLoggedIn = !!token;

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col items-center gap-8">
        <p className="text-xl font-semibold text-header md:text-2xl">
          Login to access your wishlist
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

  const initialWishListData = await fetchWishlistItems(userId);

  return (
    <div className="flex flex-col gap-20">
      <WishlistItems initialWishListData={initialWishListData} />
      <PicksForYou initialData={initialData} />
    </div>
  );
};

export default Category;
