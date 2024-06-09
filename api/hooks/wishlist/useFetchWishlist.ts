import useCreateApi from "@/api/useCreateApi";
import getApiRoute from "@/helper/getApiRoute";
import { IProductData } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "axios";

export interface IWishlist {
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
const useFetchWishlist = (userId: string, initialData?: IWishlist) => {
  const api = useCreateApi();
  const result = useQuery({
    queryKey: ["wishlist"],
    queryFn: () => getWishlist(api, userId),
    enabled: !!userId,
    ...(initialData && { initialData }),
  });
  return result;
};

export default useFetchWishlist;
