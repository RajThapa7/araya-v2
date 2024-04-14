"use client";
import getApiRoute from "@/helper/getApiRoute";
import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "axios";
import { useSearchParams } from "next/navigation";
import useCreateApi from "../../useCreateApi";

interface IUserList {
  totalCount: number;
  totalPages: number;
  count: number;
  page: number;
  data: {
    _id: string;
    username: string;
    email: string;
    provider: string;
    provider_id: string;
    profile_image: string;
  }[];
}

const getUsers = async (
  api: AxiosInstance,
  limit: string,
  page: string
): Promise<IUserList> => {
  const route = getApiRoute("getAllUsers")();
  const result = await api.get(route + `?limit=${limit}&page=${page}`);
  return result.data;
};

const useFetchUsers = () => {
  const api = useCreateApi();
  const searchParams = useSearchParams();

  const limit = searchParams.get("limit") || "10";
  const page = searchParams.get("page") || "1";
  const result = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(api, limit, page),
  });
  return result;
};

export default useFetchUsers;
