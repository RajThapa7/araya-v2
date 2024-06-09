import getApiRoute from "@/helper/getApiRoute";
import { IProductData } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "axios";
import useCreateApi from "../../useCreateApi";

const getProductById = async (
  api: AxiosInstance,
  productId: string
): Promise<IProductData> => {
  const route = getApiRoute("getProductById")(productId);
  const result = await api.get(route);
  return result.data;
};

const useFetchProductById = (productId: string, initialData?: IProductData) => {
  const api = useCreateApi();
  const result = useQuery({
    queryKey: ["products", productId],
    queryFn: () => getProductById(api, productId),
    ...(initialData && { initialData: initialData }),
  });
  return result;
};

export default useFetchProductById;
