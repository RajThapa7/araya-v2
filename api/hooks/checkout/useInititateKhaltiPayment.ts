import useCreateApi from "@/api/useCreateApi";
import getApiRoute from "@/helper/getApiRoute";
import { useMutation } from "@tanstack/react-query";
import { AxiosInstance } from "axios";

interface IResponse {
  pidx: string;
  payment_url: string;
  expires_at: Date;
  expires_in: number;
  user_fee: number;
}

interface IRequest {
  amount: number;
  customer: {
    name: string;
    email?: string;
    phone?: number;
  };
}

const initiateKhaltiPayment = async (
  api: AxiosInstance,
  data: IRequest
): Promise<IResponse> => {
  const route = getApiRoute("initiateKhalitPayment")();
  const result = await api.post(route, { data });
  return result.data;
};

const useInititateKhaltiPayment = () => {
  const api = useCreateApi();
  const mutation = useMutation({
    mutationFn: (data: IRequest) => initiateKhaltiPayment(api, data),
  });
  return mutation;
};

export default useInititateKhaltiPayment;
