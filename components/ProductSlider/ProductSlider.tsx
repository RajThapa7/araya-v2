"use client";
import { IProductCard } from "@/types";
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
  data: IProductCard[];
  cardType?: "small" | "default";
  isCategoryTitle?: boolean;
  spaceBetween?: number;
}

export default function ProductSlider({
  breakpoints = defaultBreakpoint,
  title,
  isCategoryTitle = true,
  data,
  cardType = "default",
  spaceBetween = 10,
}: IProductSliderProps) {
  const swiperRef = useRef<Swiper>();
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
        {data.map(({ img, price, title, reducedPrice, tag }) => (
          <SwiperSlide
            key={title}
            className="!flex !h-fit items-center justify-center !opacity-100"
          >
            {cardType === "default" ? (
              <ProductCard {...{ img, price, title, reducedPrice, tag }} />
            ) : (
              <SmallProductCard {...{ img, price, title, reducedPrice, tag }} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
