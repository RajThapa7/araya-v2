"use client";
import useFetchProductById from "@/api/hooks/products/useFetchProductById";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import ProductShortDescription from "@/components/ProductShortDescription";
import ProductDescriptionSkeletal from "@/components/Skeletal/ProductDescriptionSkeletal";

export default function ProductModal({ productId }: { productId: string }) {
  const { data, isLoading } = useFetchProductById(productId);

  return (
    <div className="relative flex flex-col gap-16">
      {isLoading && <ProductDescriptionSkeletal />}
      {!isLoading && (
        <div className="flex flex-col justify-center gap-x-10 gap-y-10 md:flex-row">
          <div className="w-full md:w-[50%] lg:w-[40%]">
            <ImageSlider
              data={data?.img || []}
              className="max-w-md"
              isMagnified={false}
            />
          </div>
          {data && (
            <ProductShortDescription
              data={data}
              className="w-full md:w-[50%] lg:w-[60%]"
            />
          )}
        </div>
      )}
    </div>
  );
}
