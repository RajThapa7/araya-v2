import getApiRoute from "@/helper/getApiRoute";
import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "axios";
import useCreateApi from "../useCreateApi";

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

const getUsers = async (api: AxiosInstance): Promise<IUserList> => {
  const route = getApiRoute("getAllUsers")();
  const result = await api.get(route);
  return result.data;
};

const useFetchUsers = () => {
  const api = useCreateApi();
  const result = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(api),
  });
  return result;
};

export default useFetchUsers;
