import useCreateApi from "@/api/useCreateApi";
import getApiRoute from "@/helper/getApiRoute";
import { IProductData } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "axios";

interface IWishlist {
  products: IProductData[];
  message?: string;
}

const getWishlist = async (
  api: AxiosInstance,
  userId: string
): Promise<IWishlist> => {
  const route = getApiRoute("getUserWishlistItems")(userId);
  const result = await api.get(route);
  return result.data;
};
const useFetchWishlist = (userId: string) => {
  const api = useCreateApi();
  const result = useQuery({
    queryKey: ["wishlist"],
    queryFn: () => getWishlist(api, userId),
  });
  return result;
};

export default useFetchWishlist;
