import useCreateApi from "@/api/useCreateApi";
import getApiRoute from "@/helper/getApiRoute";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosInstance } from "axios";

const deleteReviewOnProduct = async (
  api: AxiosInstance,
  productId: string,
  userId: string
) => {
  const route = getApiRoute("deleteReviewOnProduct")(productId, userId);
  const result = await api.delete(route);
  return result.data;
};
const useDeleteReviewOnProduct = (productId: string, userId: string) => {
  const api = useCreateApi();
  const client = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => deleteReviewOnProduct(api, productId, userId),
    onSuccess: () =>
      client.invalidateQueries({ queryKey: ["review", productId, userId] }),
  });
  return mutation;
};

export default useDeleteReviewOnProduct;
