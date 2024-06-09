"use client";
import useFetchProductList from "@/api/hooks/products/useFetchProducts";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import { IProductListData } from "@/types";

const RecommendProducts = ({
  initialData,
}: {
  initialData: IProductListData;
}) => {
  const { data: productData, isLoading } = useFetchProductList(initialData);
  return (
    <ProductSlider
      title="Recommend for you"
      data={productData?.data || []}
      isLoading={isLoading}
    />
  );
};

export default RecommendProducts;
