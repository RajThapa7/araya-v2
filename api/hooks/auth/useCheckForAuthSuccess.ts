import getApiRoute from "@/helper/getApiRoute";
import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "axios";
import useCreateApi from "../../useCreateApi";

const checkForAuthSuccess = async (api: AxiosInstance) => {
  const route = getApiRoute("authSuccess")();
  const result = await api.get(route);
  return result.data;
};

const useCheckForAuthSuccess = () => {
  const api = useCreateApi();
  const result = useQuery({
    queryKey: ["authSuccess"],
    queryFn: () => checkForAuthSuccess(api),
    enabled: false,
  });
  return result;
};

export default useCheckForAuthSuccess;
