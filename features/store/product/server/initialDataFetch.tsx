import { IReviewData } from "@/api/hooks/review/useFetchReviewsOnProduct";
import getApiRoute from "@/helper/getApiRoute";
import { IProductData } from "@/types";
import fetcher from "@/utils/fetcher";

const fetchProductDataById = async (productId: string) => {
  const data = fetcher<IProductData>(getApiRoute("getProductById")(productId));
  return data;
};

const fetchProductReview = async (
  productId: string,
  userId: string,
  page: string,
) => {
  const data = fetcher<IReviewData>(
    getApiRoute("getAllReviewsOnProduct")(productId, userId) +
      `?sort=createdAt&limit=5&page=${page}`,
  );
  return data;
};

export { fetchProductDataById, fetchProductReview };
