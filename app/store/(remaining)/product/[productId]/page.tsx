"use client";
import useFetchProductById from "@/api/hooks/products/useFetchProductById";
import useFetchProductList from "@/api/hooks/products/useFetchProducts";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import LoadingOverlay from "@/components/LoadingOverlay/LoadingOverlay";
import { MyTab } from "@/components/MyTab/MyTab";
import ProductDetail from "@/components/ProductDetail/ProductDetail";
import ProductShortDescription from "@/components/ProductShortDescription";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import ProductDescriptionSkeletal from "@/components/Skeletal/ProductDescriptionSkeletal";
import ReviewSection from "@/features/ReviewSection/ReviewSection";

export default function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = params;
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

  const { data, isLoading: isProductLoading } = useFetchProductList();
  return (
    <div className="relative flex flex-col gap-14">
      <LoadingOverlay isVisible={isLoading} />
      {isLoading && <ProductDescriptionSkeletal />}
      <div className="flex flex-col justify-center gap-x-10 gap-y-10 bg-white px-4 py-6 md:flex-row">
        <div
          id="portal"
          className="absolute left-[520px] top-0 z-10 border-2 border-gray-300 bg-white object-cover"
        ></div>
        {!isLoading && productData && (
          <div className="w-full md:w-[50%] lg:w-[40%]">
            <ImageSlider data={productData?.img} className="max-w-md" />
          </div>
        )}
        {!isLoading && productData && (
          <ProductShortDescription
            data={productData}
            className="w-full md:w-[50%] lg:w-[60%]"
          />
        )}
      </div>
      <MyTab data={tabData} className="bg-white p-10" isProductDescription />
      <div className="bg-transparent">
        <ProductSlider
          title="Related Products"
          data={data?.data || []}
          isLoading={isProductLoading}
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
    </div>
  );
}
