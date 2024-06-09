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
      <div className="flex flex-col gap-8 items-center">
        <p className="font-semibold text-header text-2xl">
          Login to access your wishlist
        </p>
        <Image
          src={require("@/public/login.svg")}
          alt="login"
          width={400}
          height={200}
        />
        <Link
          href={"/store/login"}
          className="bg-accent text-white py-3 px-6 rounded-md"
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
