import getApiRoute from "@/helper/getApiRoute";
import { IProductListData } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "axios";
import useCreateApi from "../useCreateApi";

const getAllProducts = async (
  api: AxiosInstance
): Promise<IProductListData> => {
  const route = getApiRoute("getAllProducts")();
  const result = await api.get(route);
  return result.data;
};

const useFetchProductList = () => {
  const api = useCreateApi();
  const result = useQuery({
    queryKey: ["products"],
    queryFn: () => getAllProducts(api),
  });
  return result;
};

export default useFetchProductList;
