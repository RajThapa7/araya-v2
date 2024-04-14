import getApiRoute from "@/helper/getApiRoute";
import { ICategory } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "axios";
import useCreateApi from "../../useCreateApi";

const getAllCategories = async (api: AxiosInstance): Promise<ICategory[]> => {
  const route = getApiRoute("getAllCategories")();
  const result = await api.get(route);
  return result.data;
};

const useFetchCategories = () => {
  const api = useCreateApi();
  const result = useQuery({
    queryKey: ["categories"],
    queryFn: () => getAllCategories(api),
  });
  return result;
};

export default useFetchCategories;
