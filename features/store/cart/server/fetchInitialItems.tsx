import { IWishlist } from "@/api/hooks/wishlist/useFetchWishlist";
import getApiRoute from "@/helper/getApiRoute";
import fetcher from "@/utils/fetcher";

const fetchCartItems = async (userId: string) => {
  const data = await fetcher<IWishlist>(
    getApiRoute("getUserCartItems")(userId)
  );
  return data;
};

export { fetchCartItems };
