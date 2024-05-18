"use client";
import classNames from "@/utils/classNames";
import Image from "next/image";
import { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ImageSlider({
  className,
  isMagnified = true,
  data,
}: {
  className?: string;
  isMagnified?: boolean;
  data: string[];
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className={classNames(className, "h-fit")}>
      <Swiper
        spaceBetween={10}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        centeredSlides={true}
        className="mySwiper2"
      >
        {data.map((img, index) => (
          <SwiperSlide key={index}>
            {!isMagnified ? (
              <div className="relative w-full pt-[100%]">
                <Image
                  src={img}
                  alt="profile"
                  objectFit="fill"
                  fill
                  className="left-0 top-0 w-full object-fill"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ) : (
              <>
                <div className="relative w-full pt-[100%] lg:hidden">
                  <Image
                    src={img}
                    alt="profile"
                    objectFit="fill"
                    fill
                    className="left-0 top-0 w-full object-fill"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="hidden w-full lg:flex">
                  <ReactImageMagnify
                    {...{
                      enlargedImagePortalId: "portal",
                      smallImage: {
                        alt: "product image",
                        isFluidWidth: true,
                        src: img,
                        sizes:
                          "(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px",
                      },
                      largeImage: {
                        src: img,
                        width: 1300,
                        height: 800,
                      },
                      enlargedImageContainerDimensions: {
                        // width: "190%",
                        // height: "150%",
                        width: 800,
                        height: 580,
                      },
                    }}
                  />
                </div>
              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={5}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper !w-full"
      >
        {data.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-[70px] pt-[100%]">
              <Image
                src={img}
                alt="profile"
                objectFit="fill"
                fill
                className="left-0 top-0 w-full object-fill"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
