"use client";
import useFetchProductById from "@/api/hooks/products/useFetchProductById";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import LoadingOverlay from "@/components/LoadingOverlay/LoadingOverlay";
import { MyTab } from "@/components/MyTab/MyTab";
import ProductDetail from "@/components/ProductDetail/ProductDetail";
import ProductShortDescription from "@/components/ProductShortDescription";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import ProductDescriptionSkeletal from "@/components/Skeletal/ProductDescriptionSkeletal";
import { data } from "@/data/productData";
import ReviewSection from "@/features/ReviewSection/ReviewSection";

// type Props = {
//   params: { id: string };
//   searchParams: { [key: string]: string | string[] | undefined };
// };

// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   return {
//     title: `${searchParams?.query} | Araya Arts Store`,
//     description:
//       "Araya Arts | Handmade Custom Notebooks and other art materials",
//   };
// }

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
          data={data}
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
