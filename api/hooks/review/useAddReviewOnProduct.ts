import useCreateApi from "@/api/useCreateApi";
import getApiRoute from "@/helper/getApiRoute";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosInstance } from "axios";

interface IPostData {
  review: string;
  rating: string;
  productId: string;
  userId: string;
  image?: any[];
}

const addReviewOnProduct = async (data: IPostData, api: AxiosInstance) => {
  const route = getApiRoute("addReviewOnProduct")();

  const formData = new FormData();

  formData.append("review", data.review);
  formData.append("rating", data.rating);
  formData.append("product_id", data.productId);
  formData.append("user_id", data.userId);

  data.image && data.image.forEach((item) => formData.append("image", item));

  const result = await api.post(route, formData);
  console.log(result, "result");
  return result.data;
};

const useAddReviewOnProduct = (productId: string, userId: string) => {
  const api = useCreateApi();
  const client = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: IPostData) => addReviewOnProduct(data, api),
    onSuccess: () =>
      client.invalidateQueries({ queryKey: ["review", productId, userId] }),
  });
  return mutation;
};

export default useAddReviewOnProduct;
