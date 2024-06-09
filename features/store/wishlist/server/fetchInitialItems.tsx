import { IWishlist } from "@/api/hooks/wishlist/useFetchWishlist";
import getApiRoute from "@/helper/getApiRoute";
import fetcher from "@/utils/fetcher";

const fetchWishlistItems = async (userId: string) => {
  const data = await fetcher<IWishlist>(getApiRoute("getUserWishlistItems")(userId));
  return data;
};

export { fetchWishlistItems };
