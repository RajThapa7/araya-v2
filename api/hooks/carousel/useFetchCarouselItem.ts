import useCreateApi from "@/api/useCreateApi";
import getApiRoute from "@/helper/getApiRoute";
import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "axios";

export interface ICarouselResult {
  totalCount: number;
  totalPages: number;
  count: number;
  page: number;
  data: {
    _id: string;
    img: string;
    link: string;
    title: string;
    isVisible: boolean;
    createdAt: string;
    updatedAt: string;
  }[];
}

const getCarouselItem = async (
  api: AxiosInstance
): Promise<ICarouselResult> => {
  const route = getApiRoute("getAllCarouselItem")();
  const result = await api.get(route);
  return result.data;
};

const useFetchCarouselItem = (initialData?: ICarouselResult) => {
  const api = useCreateApi();
  const result = useQuery({
    queryKey: ["carousel"],
    queryFn: () => getCarouselItem(api),
    ...(initialData && { initialData: initialData }),
  });
  return result;
};

export default useFetchCarouselItem;
