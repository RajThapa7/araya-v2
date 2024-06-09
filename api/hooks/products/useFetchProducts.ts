"use client";
import getApiRoute from "@/helper/getApiRoute";
import { IProductListData } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "axios";
import { useSearchParams } from "next/navigation";
import useCreateApi from "../../useCreateApi";

const getAllProducts = async (
  api: AxiosInstance,
  limit: string,
  page: string
): Promise<IProductListData> => {
  const route = getApiRoute("getAllProducts")();
  const result = await api.get(route + `?limit=${limit}&page=${page}`);
  return result.data;
};

const useFetchProductList = (initialData?: IProductListData) => {
  const api = useCreateApi();
  const searchParams = useSearchParams();

  const limit = searchParams.get("limit") || "10";
  const page = searchParams.get("page") || "1";

  const result = useQuery({
    queryKey: ["products", limit, page],
    queryFn: () => getAllProducts(api, limit, page),
    ...(initialData && { initialData: initialData }),
  });
  return result;
};

export default useFetchProductList;
