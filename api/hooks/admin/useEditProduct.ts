import getApiRoute from "@/helper/getApiRoute";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosInstance } from "axios";
import useCreateApi from "../../useCreateApi";

export interface IPostData {
  title: string;
  tag?: string;
  category: string;
  price: string;
  reducedPrice?: string;
  description: string;
  productHighlight: string;
  image: any[];
  productCount?: string;
  isProductVisible: string;
  cloudImage: string[];
  removedCloudImage?: string[];
}

const editProduct = async (
  productId: string,
  data: IPostData,
  api: AxiosInstance
) => {
  const route = getApiRoute("editProduct")(productId);

  const formData = new FormData();

  formData.append("title", data.title);
  formData.append("category", data.category);
  formData.append("price", data.price);
  formData.append("tag", data.tag || "");
  formData.append("reducedPrice", data?.reducedPrice || "");
  formData.append("description", data.description);
  formData.append("productHighlight", data.productHighlight);
  formData.append("productCount", data.productCount || "");
  formData.append("isProductVisible", data.isProductVisible);
  formData.append("cloudImage", JSON.stringify(data.cloudImage));
  formData.append(
    "removedCloudImage",
    JSON.stringify(data.removedCloudImage || [])
  );

  data.image.forEach((item) => formData.append("image", item));

  const result = await api.patch(route, formData);
  return result.data;
};

const useEditProduct = (productId: string) => {
  const api = useCreateApi();
  const client = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: IPostData) => editProduct(productId, data, api),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["products"] });
    },
  });
  return mutation;
};

export default useEditProduct;
