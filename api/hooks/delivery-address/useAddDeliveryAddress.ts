import getApiRoute from "@/helper/getApiRoute";
import { useAuth } from "@/Providers/AuthProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosInstance } from "axios";
import useCreateApi from "../../useCreateApi";

export interface IPostData {
  province: string;
  city: string;
  area: string;
  landmark: string;
  label: string;
  name: string;
  number: string;
}

const addDeliveryAddress = async (
  data: IPostData,
  api: AxiosInstance,
  userId: string,
) => {
  const route = getApiRoute("addDeliveryAddress")();

  const result = await api.post(route, { ...data, userId });
  return result.data;
};

const useAddDeliveryAddress = () => {
  const api = useCreateApi();
  const client = useQueryClient();
  const { user } = useAuth();

  const mutation = useMutation({
    mutationFn: (data: IPostData) => addDeliveryAddress(data, api, user._id),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["delivery"] });
    },
  });
  return mutation;
};

export default useAddDeliveryAddress;
