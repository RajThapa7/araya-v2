import getApiRoute from "@/helper/getApiRoute";
import { useMutation } from "@tanstack/react-query";
import { AxiosInstance } from "axios";
import useCreateApi from "../../useCreateApi";

interface IRegisterData {
  username: string;
  password: string;
  email: string;
}

const registerUser = async (data: IRegisterData, api: AxiosInstance) => {
  const route = getApiRoute("register")();
  const result = await api.post(route, data);
  return result.data;
};

const useRegisterUser = () => {
  const api = useCreateApi();
  const mutation = useMutation({
    mutationFn: (data: IRegisterData) => registerUser(data, api),
  });
  return mutation;
};

export default useRegisterUser;
