"use client";
import useFetchProductList from "@/api/hooks/products/useFetchProducts";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import { IProductListData } from "@/types";

const RecommendedProductsByProductId = ({
  initialData,
}: {
  initialData: IProductListData;
}) => {
  const { data, isLoading } = useFetchProductList(initialData);
  return (
    <div className="bg-transparent">
      <ProductSlider
        title="Related Products"
        data={data?.data || []}
        isLoading={isLoading}
        spaceBetween={10}
        breakpoints={{
          540: {
            slidesPerView: 3,
            grid: {
              fill: "row",
              rows: 1,
            },
          },
          840: {
            slidesPerView: 4,
            grid: {
              fill: "row",
              rows: 1,
            },
          },
        }}
      />
    </div>
  );
};

export default RecommendedProductsByProductId;
