import getApiRoute from "@/helper/getApiRoute";
import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "axios";
import useCreateApi from "../../useCreateApi";

interface IResult {
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
}

const getCarouselById = async (
  api: AxiosInstance,
  id: string
): Promise<IResult> => {
  const route = getApiRoute("getCarouselById")(id);
  const result = await api.get(route);
  return result.data;
};

const useFetchCarouselById = (id: string) => {
  const api = useCreateApi();
  const result = useQuery({
    queryKey: ["products", id],
    queryFn: () => getCarouselById(api, id),
  });
  return result;
};

export default useFetchCarouselById;
