"use client";
import { IProductData } from "@/types";
import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Grid, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import ProductCard from "../ProductCard/ProductCard";
import CardSkeletal from "../Skeletal/CardSkeletal";
import SmallProductCard from "../SmallProductCard/SmallProductCard";

type BreakPoint = { [width: number]: SwiperOptions };

const defaultBreakpoint: BreakPoint = {
  540: {
    slidesPerView: 2,
    grid: {
      fill: "row",
      rows: 1,
    },
  },
  840: {
    slidesPerView: 3,
    grid: {
      fill: "row",
      rows: 1,
    },
  },
  1160: {
    slidesPerView: 4,
    grid: {
      fill: "row",
      rows: 1,
    },
  },
};

interface IProductSliderProps {
  breakpoints?: BreakPoint;
  title: string;
  data: IProductData[];
  cardType?: "small" | "default";
  isCategoryTitle?: boolean;
  spaceBetween?: number;
  isLoading: boolean;
}

export default function ProductSlider({
  breakpoints = defaultBreakpoint,
  title,
  isCategoryTitle = true,
  data,
  cardType = "default",
  spaceBetween = 10,
  isLoading,
}: IProductSliderProps) {
  const swiperRef = useRef<any>();
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="">
      <div className="relative">
        <div className={`${isCategoryTitle ? "visible" : "invisible"}`}>
          <CategoryTitle title={title} />
        </div>
        <div className="absolute right-6 top-2 flex flex-row items-center justify-center gap-2">
          <button
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            className={
              isStart ? "cursor-not-allowed text-gray-600" : "text-accent"
            }
          >
            <FaChevronLeft size={16} className="transition-smooth" />
          </button>
          <button
            onClick={() => swiperRef.current?.swiper.slideNext()}
            className={
              isEnd ? "cursor-not-allowed text-gray-600" : "text-accent"
            }
          >
            <FaChevronRight size={16} />
          </button>
        </div>
      </div>
      {/* carousel  */}
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        breakpoints={breakpoints}
        spaceBetween={spaceBetween}
        onReachBeginning={() => setIsStart(true)}
        onReachEnd={() => setIsEnd(true)}
        onSlideChange={() => {
          if (isStart || isEnd) {
            setIsEnd(false);
            setIsStart(false);
          }
        }}
        grid={{
          fill: "row",
          rows: 2,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation, Grid]}
        className="!h-full !w-full !px-[2px] !pb-10 !pt-6"
      >
        {isLoading && <CardSkeletal />}

        {!isLoading &&
          data?.map(
            ({
              _id,
              reducedPrice,
              title: productTitle,
              price,
              featured_img,
              tag,
              average_rating,
              ratingCount,
            }) => (
              <SwiperSlide
                key={title}
                className="!flex !h-fit items-center justify-center !opacity-100"
              >
                {cardType === "default" ? (
                  <ProductCard
                    className="sm:h-[420px]"
                    id={_id}
                    img={featured_img}
                    {...{ price, reducedPrice, tag }}
                    title={productTitle}
                    averageRating={average_rating}
                    ratingCount={ratingCount}
                  />
                ) : (
                  <SmallProductCard
                    className="sm:h-[200px]"
                    id={_id}
                    title={productTitle}
                    img={featured_img}
                    {...{ price, reducedPrice, tag }}
                    averageRating={average_rating}
                    ratingCount={ratingCount}
                  />
                )}
              </SwiperSlide>
            )
          )}
      </Swiper>
    </div>
  );
}
