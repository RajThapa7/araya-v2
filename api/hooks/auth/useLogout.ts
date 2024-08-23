import getApiRoute from "@/helper/getApiRoute";
import { useMutation } from "@tanstack/react-query";
import { AxiosInstance } from "axios";
import useCreateApi from "../../useCreateApi";

const logout = async (api: AxiosInstance) => {
  const route = getApiRoute("logout")();
  const result = await api.post(route);
  return result.data;
};

const useLogout = () => {
  const api = useCreateApi();
  const mutation = useMutation({
    mutationFn: () => logout(api),
  });
  return mutation;
};

export default useLogout;
