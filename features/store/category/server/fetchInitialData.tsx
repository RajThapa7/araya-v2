import getApiRoute from "@/helper/getApiRoute";
import { ICategoryListData } from "@/types";
import fetcher from "@/utils/fetcher";

const fetchItemsUnderCategory = async (categoryId: string) => {
  const data = fetcher<ICategoryListData>(
    getApiRoute("getProductsUnderCategory")(categoryId)
  );
  return data;
};

export { fetchItemsUnderCategory };
