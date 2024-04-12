import getApiRoute from "@/helper/getApiRoute";
import { useMutation } from "@tanstack/react-query";
import { AxiosInstance } from "axios";
import useCreateApi from "../useCreateApi";

interface ILoginData {
  username: string;
  password: string;
}

const adminLogin = async (data: ILoginData, api: AxiosInstance) => {
  const route = getApiRoute("login")();
  const result = await api.post(route, data);
  return result.data;
};

const useLogin = () => {
  const api = useCreateApi();
  const mutation = useMutation({
    mutationFn: (data: ILoginData) => adminLogin(data, api),
  });
  return mutation;
};

export default useLogin;
