import useCreateApi from "@/api/useCreateApi";
import getApiRoute from "@/helper/getApiRoute";
import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "axios";
import { useSearchParams } from "next/navigation";

interface IResponse {
  pidx: string;
  total_amount: number;
  status: string;
  transaction_id: string;
  fee: number;
  refunded: boolean;
}

const verifyKhaltiPayment = async (
  api: AxiosInstance,
  pidx: string
): Promise<IResponse> => {
  const route = getApiRoute("verifyKhalitPayment")(pidx);
  const result = await api.get(route);
  return result.data;
};

const useVerifyKhaltiPayment = () => {
  const searchParams = useSearchParams();
  const pidx = searchParams.get("pidx") as string;
  const api = useCreateApi();
  const result = useQuery({
    queryKey: ["checkout", "khalti"],
    queryFn: () => verifyKhaltiPayment(api, pidx),
    enabled: !!pidx,
  });
  return result;
};

export default useVerifyKhaltiPayment;
