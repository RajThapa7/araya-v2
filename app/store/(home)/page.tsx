"use client";
import { useAuth } from "@/Providers/AuthProvider";
import useFetchProductList from "@/api/hooks/products/useFetchProducts";
import GridView from "@/components/GridView/GridView";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import useScrollToTop from "@/hooks/useScrollToTop";

export default function Page() {
  useScrollToTop();
  const { token, user } = useAuth();

  const isLoggedIn = !!token;
  const { data: productData, isLoading } = useFetchProductList();

  return (
    <div className="flex flex-col gap-10 pt-24 pb-14">
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
      <ProductSlider
        title="Recommend for you"
        data={productData?.data || []}
        isLoading={isLoading}
      />
      {!isLoading && productData && <GridView data={productData?.data} />}
    </div>
  );
}
