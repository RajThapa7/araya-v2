"use client";
import useFetchProductById from "@/api/hooks/products/useFetchProductById";
import ProductDetail from "@/components/ProductDetail/ProductDetail";
import ReviewSection from "@/features/ReviewSection/ReviewSection";
import { IProductData } from "@/types";

export default function DescriptionAndReviewTabBar({
  initialData,
  productId,
}: {
  initialData: IProductData;
  productId: string;
}) {
  const { data: productData, isLoading } = useFetchProductById(
    productId,
    initialData
  );

  return (
    <>
      {productData && (
        <ProductDetail
          data={productData}
          className="bg-primary p-10 rounded-md"
        />
      )}
      <ReviewSection />
    </>
  );
}
