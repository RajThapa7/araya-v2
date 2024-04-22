"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Button, Carousel, IconButton } from "@material-tailwind/react";
import Image from "next/image";
import { carouselData } from "./carouselData";

export function MyCarousel() {
  return (
    <Carousel
      loop={true}
      className=""
      autoplay
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-accent" : "w-4 bg-gray-500"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="gray"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <ChevronLeftIcon width={20} />
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="gray"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <ChevronRightIcon width={20} />
        </IconButton>
      )}
    >
      {carouselData.map(({ description, id, price, title }) => (
        <div key={id} className="relative md:h-[500px] h-[400px] w-full">
          <Image
            fill
            src="https://transvelo.github.io/electro-html/2.0/assets/img/1920X422/img2.jpg"
            alt="image 1"
            className="h-full w-full object-cover"
            sizes="(min-width: 480px) 384px, calc(92.5vw - 42px)"
          />
          <div className="absolute inset-0 h-full w-full flex flex-row justify-between">
            <div className="px-12 md:px-24 flex flex-col items-start flex-1 justify-center w-full md:w-1/2">
              <p className="text-accent-dark mb-4 lg:text-lg text-sm font-bold uppercase">
                {title}
              </p>
              <p className="mb-10 opacity-80 text-gray-900 uppercase text-2xl lg:text-4xl font-semibold leading-snug">
                {description}
              </p>
              <div className="mb-6">
                <p className="text-gray-600">From</p>
                <p className="flex flex-row items-start gap-1 font-semibold text-gray-800">
                  <span className="text-xl">Rs</span>
                  <span className="lg:text-5xl text-3xl">{price}</span>
                </p>
              </div>
              <div className="flex justify-center gap-2">
                <Button
                  size="lg"
                  className="bg-accent transition-smooth hover:bg-accent-dark"
                >
                  Shop Now
                </Button>
              </div>
            </div>
            <div className="w-1/2 hidden relative md:flex flex-1">
              <Image
                fill
                src="https://transvelo.github.io/electro-html/2.0/assets/img/468X417/img1.png"
                alt="logo"
                className="h-full w-full object-contain"
                sizes="(min-width: 480px) 384px, calc(92.5vw - 42px)"
              />
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
