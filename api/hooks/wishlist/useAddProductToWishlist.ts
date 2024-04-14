import useCreateApi from "@/api/useCreateApi";
import getApiRoute from "@/helper/getApiRoute";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosInstance } from "axios";

interface IPostData {
  userId: string;
  productId: string;
}

const removeProductFromWishlist = async (
  data: IPostData,
  api: AxiosInstance
) => {
  const route = getApiRoute("removeProductFromWishlist")();
  const result = await api.post(route, data);
  return result.data;
};

const useFetchRemoveProductFromWishlist = () => {
  const client = useQueryClient();
  const api = useCreateApi();
  const result = useMutation({
    mutationFn: (data: IPostData) => removeProductFromWishlist(data, api),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["wishlist"] });
    },
  });
  return result;
};

export default useFetchRemoveProductFromWishlist;
