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
  productCount?: string;
  isProductVisible: string;
  description: string;
  productHighlight: string;
  image: any[];
}

const addProduct = async (data: IPostData, api: AxiosInstance) => {
  const route = getApiRoute("addProduct")();

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

  data.image.forEach((item) => formData.append("image", item));

  const result = await api.post(route, formData);
  return result.data;
};

const useAddProduct = () => {
  const api = useCreateApi();
  const client = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: IPostData) => addProduct(data, api),
    onSuccess: () => {
      // invalidate multiple queries
      client.invalidateQueries({
        predicate: (query) => {
          return ["products", "categories"].includes(
            query.queryKey[0] as string,
          );
        },
      });
    },
  });
  return mutation;
};

export default useAddProduct;
