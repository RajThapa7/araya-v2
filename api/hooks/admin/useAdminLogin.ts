import getApiRoute from "@/helper/getApiRoute";
import { useMutation } from "@tanstack/react-query";
import { AxiosInstance } from "axios";
import useCreateApi from "../../useCreateApi";

interface IAdminLoginData {
  username: string;
  password: string;
}

const adminLogin = async (data: IAdminLoginData, api: AxiosInstance) => {
  const route = getApiRoute("adminLogin")();
  const result = await api.post(route, data);
  return result.data;
};

const useAdminLogin = () => {
  const api = useCreateApi();
  const mutation = useMutation({
    mutationFn: (data: IAdminLoginData) => adminLogin(data, api),
  });
  return mutation;
};

export default useAdminLogin;
