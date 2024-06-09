import getApiRoute from "@/helper/getApiRoute";
import { IProductData } from "@/types";
import fetcher from "@/utils/fetcher";

const fetchProductDataById = async (productId: string) => {
  const data = fetcher<IProductData>(getApiRoute("getProductById")(productId));
  return data;
};

export { fetchProductDataById };
