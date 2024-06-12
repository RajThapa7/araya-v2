import useCreateApi from "@/api/useCreateApi";
import getApiRoute from "@/helper/getApiRoute";
import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "axios";
import { useSearchParams } from "next/navigation";

export interface IReviewData {
  average_rating: number;
  ratingCount: Array<number>;
  totalCount: number;
  totalPages: number;
  count: number;
  page: number;
  data: Datum[];
}

interface Datum {
  _id: string;
  product_id: string;
  user_id: {
    username: string;
    email: string;
  };
  rating: number;
  review: string;
  img: string[];
  createdAt: Date;
  updatedAt: Date;
}

const getAllReviewsOnProduct = async (
  api: AxiosInstance,
  productId: string,
  userId: string,

  limit: string,
  page: string,
): Promise<IReviewData> => {
  const route = getApiRoute("getAllReviewsOnProduct")(productId, userId);
  const result = await api.get(
    route + `?sort=createdAt&limit=${limit}&page=${page}`,
  );
  return result.data;
};

const useFetchReviewsOnProduct = (
  productId: string,
  userId: string,
  initialData?: IReviewData,
) => {
  const api = useCreateApi();
  const searchParams = useSearchParams();
  const limit = searchParams.get("limit") || "5";
  const page = searchParams.get("page") || "1";
  const result = useQuery({
    staleTime: 0,
    queryKey: ["review", productId, userId, limit, page],
    queryFn: () => getAllReviewsOnProduct(api, productId, userId, limit, page),
    ...(initialData && { initialData: initialData }),
  });
  return result;
};

export default useFetchReviewsOnProduct;
