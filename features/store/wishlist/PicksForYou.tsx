"use client";
import useFetchProductList from "@/api/hooks/products/useFetchProducts";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import { IProductListData } from "@/types";

const PicksForYou = ({ initialData }: { initialData: IProductListData }) => {
  const { data, isLoading: isProductLoading } =
    useFetchProductList(initialData);
  return (
    <ProductSlider
      data={data?.data || []}
      title="Picks for you"
      isLoading={isProductLoading}
      breakpoints={{
        540: {
          slidesPerView: 2,
          grid: {
            fill: "row",
            rows: 2,
          },
        },
        840: {
          slidesPerView: 3,
          grid: {
            fill: "row",
            rows: 2,
          },
        },
        1160: {
          slidesPerView: 4,
          grid: {
            fill: "row",
            rows: 2,
          },
        },
      }}
    />
  );
};

export default PicksForYou;
