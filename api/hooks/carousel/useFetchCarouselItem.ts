import useCreateApi from "@/api/useCreateApi";
import getApiRoute from "@/helper/getApiRoute";
import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "axios";

interface IResult {
  totalCount: number;
  totalPages: number;
  count: number;
  page: number;
  data: {
    _id: string;
    title: string;
    subtitle: string;
    img: string;
    price: number;
    link: string;
    buttonText: string;
    isVisible: boolean;
    createdAt: string;
    updatedAt: string;
  }[];
}

const getCarouselItem = async (api: AxiosInstance): Promise<IResult> => {
  const route = getApiRoute("getAllCarouselItem")();
  const result = await api.get(route);
  return result.data;
};

const useFetchCarouselItem = () => {
  const api = useCreateApi();
  const result = useQuery({
    queryKey: ["carousel"],
    queryFn: () => getCarouselItem(api),
  });
  return result;
};

export default useFetchCarouselItem;
