import { ICarouselResult } from "@/api/hooks/carousel/useFetchCarouselItem";
import getApiRoute from "@/helper/getApiRoute";
import { IProductListData } from "@/types";
import fetcher from "@/utils/fetcher";

const fetchProductData = async () => {
  const data = await fetcher<IProductListData>(getApiRoute("getAllProducts")());
  return data;
};

const fetchCarouselData = async () => {
  const data = await fetcher<ICarouselResult>(
    getApiRoute("getAllCarouselItem")()
  );
  return data;
};

export { fetchCarouselData, fetchProductData };
