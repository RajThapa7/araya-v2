"use client";
import useFetchProductById from "@/api/hooks/products/useFetchProductById";
import { MyTab } from "@/components/MyTab/MyTab";
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
  const { data: productData, isLoading } = useFetchProductById(productId);

  const tabData = [
    {
      label: "Description",
      value: "description",
      desc: productData && <ProductDetail data={productData} />,
    },

    {
      label: "Review",
      value: "review",
      desc: <ReviewSection />,
    },
  ];
  return (
    <MyTab data={tabData} className="bg-white p-10" isProductDescription />
  );
}
