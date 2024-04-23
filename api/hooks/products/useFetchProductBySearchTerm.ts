import getApiRoute from "@/helper/getApiRoute";
import { IProductListData } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "axios";
import { useSearchParams } from "next/navigation";
import useCreateApi from "../../useCreateApi";

const getProductBySearchTerm = async (
  api: AxiosInstance,
  searchTerm: string
): Promise<IProductListData> => {
  const route = getApiRoute("getProductsBySearchTerm")();
  const result = await api.get(`${route}?search=${searchTerm}`);
  return result.data;
};

const useFetchProductBySearchTerm = () => {
  const api = useCreateApi();

  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("query") || "";

  const result = useQuery({
    queryKey: ["products", searchTerm],
    queryFn: () => getProductBySearchTerm(api, searchTerm),
  });
  return result;
};

export default useFetchProductBySearchTerm;
