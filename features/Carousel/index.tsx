"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import one from "/public/1.png";
import two from "/public/2.png";
import three from "/public/3.png";
import four from "/public/4.png";
import five from "/public/5.png";
import six from "/public/6.png";

const data = [
  {
    _id: 0,
    url: one,
    title: "BookBinding",
  },
  {
    _id: 1,
    url: two,
    title: "Stitches",
  },
  {
    _id: 2,
    url: three,
    title: "Stitches",
  },
  {
    _id: 3,
    url: four,
    title: "Hardcover Books",
  },
  {
    _id: 4,
    url: five,
    title: "Leather Books",
  },
  {
    _id: 5,
    url: six,
    title: "Pocket Notebook",
  },
];

export default function Carousel() {
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
    <motion.div
      initial={{ x: "-100%" }}
      whileInView={{ x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="pb-6 md:pb-8"
    >
      <Slider {...settings}>
        {data?.map(({ _id, title, url }) => (
          <>
            <CarouselCard key={_id} {...{ title, url }} />
          </>
        ))}
      </Slider>
      <div className="inline-flex pt-2 md:pt-4 pl-8 gap-4 text-sm text-header">
        <p>
          {activeIndex + 1}/{data.length}
        </p>
        <motion.p animate={resetAnimation ? { opacity: 0 } : { opacity: 100 }}>
          {data[activeIndex].title}
        </motion.p>
      </div>
    </motion.div>
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

function CarouselCard({ title, url }: { title: string; url: string }) {
  return (
    <div className="group cursor-pointer transition-all w-full aspect-video relative">
      <Image fill src={url} alt={title} className="w-full object-fill h-full" />
    </div>
  );
}
