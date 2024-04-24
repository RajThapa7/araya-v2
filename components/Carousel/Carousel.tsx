"use client";
import useFetchCarouselItem from "@/api/hooks/carousel/useFetchCarouselItem";
import classNames from "@/utils/classNames";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Carousel, IconButton } from "@material-tailwind/react";
import { useRouter } from "next-nprogress-bar";
import Image from "next/image";

export function MyCarousel() {
  const { data, isLoading } = useFetchCarouselItem();
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="w-full aspect-[16/7] animate-shimmer bg-gray-400"></div>
    );
  }

  return (
    <Carousel
      loop={true}
      className=""
      // autoplay
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
          color="white"
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
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <ChevronRightIcon width={20} />
        </IconButton>
      )}
    >
      {data?.data.map(({ _id, img, isVisible, link, title }) => (
        <div
          onClick={() => router.push(link)}
          key={_id}
          className={classNames(
            !isVisible && "hidden",
            "relative aspect-[16/8] lg:aspect-[16/7] w-full"
          )}
        >
          <Image
            fill
            src={img}
            alt={title}
            className="h-full w-full object-fill"
            // sizes="(min-width: 480px) 384px, calc(92.5vw - 42px)"
          />
        </div>
      ))}
    </Carousel>
  );
}
