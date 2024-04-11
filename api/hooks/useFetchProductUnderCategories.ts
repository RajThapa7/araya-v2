"use client";
import getApiRoute from "@/helper/getApiRoute";
import { ICategoryListData } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "axios";
import { useSearchParams } from "next/navigation";
import useCreateApi from "../useCreateApi";

const getProductUnderCategories = async (
  api: AxiosInstance,
  slug: string,
  limit: string,
  page: string
): Promise<ICategoryListData> => {
  const route = getApiRoute("getProductsUnderCategory")(slug);
  const result = await api.get(route + `?limit=${limit}&page=${page}`);
  return result.data;
};

const useFetchProductUnderCategories = (slug: string) => {
  const api = useCreateApi();
  const searchParams = useSearchParams();

  const limit = searchParams.get("limit") || "10";
  const page = searchParams.get("page") || "1";
  const result = useQuery({
    queryKey: ["categories", slug],
    queryFn: () => getProductUnderCategories(api, slug, limit, page),
  });
  return result;
};

export default useFetchProductUnderCategories;
