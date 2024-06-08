"use client";
import { merriweather } from "@/app/fonts";
import { MotionDiv } from "@/components";
import { PropsWithChildren, RefObject, useRef } from "react";
import Slider from "react-slick";

const title = {
  inView: {
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.5, 1, 0.89, 1],
    },
  },
  hidden: {
    x: -800,
  },
};

const settings: any = {
  dots: false,
  infinite: true,
  speed: 800,
  //   autoplay: true,
  autoplayspeed: 7000,
  nextArrow: "",
  prevArrow: "",
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    ,
  ],
  slidesToShow: 3,
  pauseonhover: true,
};

export default function TestimonialCarousel({ children }: PropsWithChildren) {
  const sliderRef = useRef<any>(null);
  return (
    <>
      <MotionDiv
        variants={title}
        className="flex flex-col gap-4 sm:flex-row sm:justify-between mb-8 md:mb-12"
      >
        <p
          className={`font-semibold leading-[1.1] header-2 text-header max-w-xl ${merriweather.className}`}
        >
          Read trusted reviews from our customers
        </p>
        <div className="inline-flex gap-6 w-fit sm:self-end">
          <LeftArrow {...{ sliderRef }} />
          <RightArrow {...{ sliderRef }} />
        </div>
      </MotionDiv>
      <Slider {...settings} ref={sliderRef}>
        {children}
      </Slider>
    </>
  );
}

function RightArrow({ sliderRef }: { sliderRef: RefObject<any> }) {
  return (
    <button
      className="z-10 transition-colors "
      onClick={() => sliderRef.current.slickNext()}
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 45 14"
        width={40}
        height={30}
        fill="rgb(69, 93, 88)"
      >
        <path d="M36.9,7.5H0v-1h36.9L35,0c2.6,2.8,6.7,5.4,10,7c-3.3,1.6-7.4,4.2-10,7L36.9,7.5z"></path>
        <path d="M36.9,7.5H0v-1h36.9L35,0c2.6,2.8,6.7,5.4,10,7c-3.3,1.6-7.4,4.2-10,7L36.9,7.5z"></path>
      </svg>
    </button>
  );
}

function LeftArrow({ sliderRef }: { sliderRef: RefObject<any> }) {
  return (
    <button
      className="rotate-180 z-10 transition-colors"
      onClick={() => {
        sliderRef.current.slickPrev();
      }}
    >
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 45 14"
        width={40}
        height={30}
        fill={"rgb(69, 93, 88)"}
      >
        <path d="M36.9,7.5H0v-1h36.9L35,0c2.6,2.8,6.7,5.4,10,7c-3.3,1.6-7.4,4.2-10,7L36.9,7.5z"></path>
        <path d="M36.9,7.5H0v-1h36.9L35,0c2.6,2.8,6.7,5.4,10,7c-3.3,1.6-7.4,4.2-10,7L36.9,7.5z"></path>
      </svg>
    </button>
  );
}
