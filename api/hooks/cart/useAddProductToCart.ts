import useCreateApi from "@/api/useCreateApi";
import getApiRoute from "@/helper/getApiRoute";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosInstance } from "axios";

interface IPostData {
  userId: string;
  productId: string | string[];
}

const addProductToCart = async (data: IPostData, api: AxiosInstance) => {
  const route = getApiRoute("addProductToCart")();
  const result = await api.post(route, data);
  return result.data;
};

const useAddProductToCart = () => {
  const client = useQueryClient();
  const api = useCreateApi();
  const result = useMutation({
    mutationFn: (data: IPostData) => addProductToCart(data, api),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["cart"] });
    },
  });
  return result;
};

export default useAddProductToCart;
