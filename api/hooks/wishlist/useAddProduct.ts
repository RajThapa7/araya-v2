import useCreateApi from "@/api/useCreateApi";
import getApiRoute from "@/helper/getApiRoute";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosInstance } from "axios";

interface IPostData {
  userId: string;
  productId: string;
}

const addProductToWishlist = async (data: IPostData, api: AxiosInstance) => {
  const route = getApiRoute("addProductToWishlist")();
  const result = await api.post(route, data);
  return result.data;
};

const useAddProductToWishlist = () => {
  const client = useQueryClient();
  const api = useCreateApi();
  const result = useMutation({
    mutationFn: (data: IPostData) => addProductToWishlist(data, api),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["wishlist"] });
    },
  });
  return result;
};

export default useAddProductToWishlist;
