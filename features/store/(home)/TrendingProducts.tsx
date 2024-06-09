"use client";
import useFetchProductList from "@/api/hooks/products/useFetchProducts";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import { IProductListData } from "@/types";

const TrendingProducts = ({
  initialData,
}: {
  initialData: IProductListData;
}) => {
  const { data: productData, isLoading } = useFetchProductList(initialData);
  return (
    <ProductSlider
      title="Trending Products"
      cardType="small"
      breakpoints={{
        850: {
          slidesPerView: 2,
          grid: {
            fill: "row",
            rows: 2,
          },
        },
        1400: {
          slidesPerView: 3,
          grid: {
            fill: "row",
            rows: 2,
          },
        },
      }}
      data={productData?.data || []}
      isLoading={isLoading}
    />
  );
};

export default TrendingProducts;
