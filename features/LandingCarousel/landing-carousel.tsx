"use client";
import { MotionP } from "@/components";
import { PropsWithChildren, useState } from "react";
import Slider from "react-slick";
import { landingCarouselData } from "./data";

export default function LandingCarousel({ children }: PropsWithChildren) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [resetAnimation, setResetAnimation] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    pauseOnHover: false,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
    beforeChange: () => {
      setResetAnimation(true);
    },
    afterChange: (index: any) => {
      setActiveIndex(index);
      setResetAnimation(false);
    },
  };
  return (
    <>
      <Slider {...settings}>{children}</Slider>
      <div className="inline-flex pt-2 md:pt-4 pl-8 gap-4 text-sm text-header">
        <p>
          {activeIndex + 1}/{landingCarouselData.length}
        </p>
        <MotionP animate={resetAnimation ? { opacity: 0 } : { opacity: 100 }}>
          {landingCarouselData[activeIndex].title}
        </MotionP>
      </div>
    </>
  );
}

function RightArrow(props: any) {
  return (
    <button
      className="absolute right-6 top-[102%] z-10 transition-colors "
      onClick={props.onClick}
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

function LeftArrow(props: any) {
  return (
    <button
      className="absolute right-24 rotate-180 top-[102%] z-10 transition-colors"
      onClick={props.onClick}
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
