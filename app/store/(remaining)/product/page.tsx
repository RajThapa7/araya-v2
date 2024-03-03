import { data } from "@/app/store/(home)/page";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import { MyTab } from "@/components/MyTab/MyTab";
import ProductDetail from "@/components/ProductDetail/ProductDetail";
import ProductShortDescription from "@/components/ProductShortDescription";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import ReviewSection from "@/features/ReviewSection/ReviewSection";

const tabData = [
  {
    label: "Description",
    value: "description",
    desc: <ProductDetail />,
  },

  {
    label: "Review",
    value: "review",
    desc: <ReviewSection />,
  },
];

export default function ProductPage() {
  return (
    <div className="relative flex flex-col gap-14">
      <div className="flex flex-col justify-center gap-x-10 gap-y-10 bg-white px-4 py-6 md:flex-row">
        <div
          id="portal"
          className="absolute left-[520px] top-0 z-10 border-2 border-gray-300 bg-white object-cover"
        ></div>
        <div className="w-full md:w-[50%] lg:w-[40%]">
          <ImageSlider className="max-w-md" />
        </div>
        <ProductShortDescription className="w-full md:w-[50%] lg:w-[60%]" />
      </div>
      <MyTab data={tabData} className="bg-white p-10" />
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
