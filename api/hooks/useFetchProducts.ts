"use client";
import getApiRoute from "@/helper/getApiRoute";
import { IProductListData } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "axios";
import { useSearchParams } from "next/navigation";
import useCreateApi from "../useCreateApi";

const getAllProducts = async (
  api: AxiosInstance,
  limit: string | null,
  page: string | null
): Promise<IProductListData> => {
  const route = getApiRoute("getAllProducts")();
  const result = await api.get(
    route + `?limit=${limit || 10}&page=${page || 1}`
  );
  return result.data;
};

const useFetchProductList = () => {
  const api = useCreateApi();
  const searchParams = useSearchParams();

  const limit = searchParams.get("limit");
  const page = searchParams.get("page");

  const result = useQuery({
    queryKey: ["products", limit, page],
    queryFn: () => getAllProducts(api, limit, page),
  });
  return result;
};

export default useFetchProductList;
