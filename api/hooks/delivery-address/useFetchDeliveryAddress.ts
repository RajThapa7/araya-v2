import getApiRoute from "@/helper/getApiRoute";
import { useAuth } from "@/Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "axios";
import useCreateApi from "../../useCreateApi";

interface IDeliveryAddress {
  totalCount: number;
  totalPages: number;
  count: number;
  page: number;
  data: Datum[];
}

interface Datum {
  _id: string;
  userId: string;
  province: string;
  city: string;
  area: string;
  landmark: string;
  label: string;
  name: string;
  number: string;
  __v: number;
}

const getAllDeliveriesAddress = async (
  api: AxiosInstance,
  userId: string,
): Promise<IDeliveryAddress> => {
  const route = getApiRoute("getAllDeliveryAddress")(userId);
  const result = await api.get(route);
  return result.data;
};

const useFetchDeliveryAddress = () => {
  const api = useCreateApi();
  const { user } = useAuth();
  const result = useQuery({
    queryKey: ["delivery"],
    queryFn: () => getAllDeliveriesAddress(api, user._id),
  });
  return result;
};

export default useFetchDeliveryAddress;
