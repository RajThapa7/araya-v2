import useCreateApi from "@/api/useCreateApi";
import getApiRoute from "@/helper/getApiRoute";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosInstance } from "axios";

interface IPostData {
  rating: string;
  review: string;
  image: any[];
  cloudImage: string[];
  removedCloudImage?: string[];
}

const editReviewOnProduct = async (
  productId: string,
  userId: string,
  data: IPostData,
  api: AxiosInstance
) => {
  const route = getApiRoute("editReviewOnProduct")(productId, userId);

  const formData = new FormData();

  formData.append("review", data.review);
  formData.append("rating", data.rating);
  formData.append("cloudImage", JSON.stringify(data.cloudImage));
  formData.append(
    "removedCloudImage",
    JSON.stringify(data.removedCloudImage || [])
  );

  data.image.forEach((item) => formData.append("image", item));

  const result = await api.patch(route, formData);
  return result.data;
};

const useEditReviewOnProduct = (productId: string, userId: string) => {
  const api = useCreateApi();
  const client = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: IPostData) =>
      editReviewOnProduct(productId, userId, data, api),
    onSuccess: () =>
      client.invalidateQueries({ queryKey: ["review", productId, userId] }),
  });

  return mutation;
};

export default useEditReviewOnProduct;
