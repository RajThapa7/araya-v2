import getApiRoute from "@/helper/getApiRoute";
import { ICategoryListData } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "axios";
import useCreateApi from "../useCreateApi";

const getProductUnderCategories = async (
  api: AxiosInstance,
  slug: string
): Promise<ICategoryListData> => {
  const route = getApiRoute("getProductsUnderCategory")(slug);
  const result = await api.get(route);
  return result.data;
};

const useFetchProductUnderCategories = (slug: string) => {
  const api = useCreateApi();
  const result = useQuery({
    queryKey: ["categories", slug],
    queryFn: () => getProductUnderCategories(api, slug),
  });
  return result;
};

export default useFetchProductUnderCategories;
