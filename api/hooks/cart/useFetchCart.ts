import useCreateApi from "@/api/useCreateApi";
import getApiRoute from "@/helper/getApiRoute";
import { IProductData } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "axios";

interface IWishlist {
  products: IProductData[];
  message?: string;
}

const getCart = async (
  api: AxiosInstance,
  userId: string
): Promise<IWishlist> => {
  const route = getApiRoute("getUserCartItems")(userId);
  const result = await api.get(route);
  return result.data;
};
const useFetchCart = (userId: string, initialData?: IWishlist) => {
  const api = useCreateApi();
  const result = useQuery({
    queryKey: ["cart"],
    queryFn: () => getCart(api, userId),
    enabled: !!userId,
    ...(initialData && { initialData: initialData }),
  });
  return result;
};

export default useFetchCart;
