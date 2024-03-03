"use client";
import classNames from "@/utils/classNames";
import Image from "next/image";
import { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const images = [
  {
    id: 0,
    alt: "image",
    img: "https://transvelo.github.io/electro-html/2.0/assets/img/720X660/img1.jpg",
  },
  {
    id: 1,
    alt: "image",
    img: "https://transvelo.github.io/electro-html/2.0/assets/img/720X660/img2.jpg",
  },
  {
    id: 2,
    alt: "image",
    img: "https://transvelo.github.io/electro-html/2.0/assets/img/720X660/img3.jpg",
  },
];

export default function ImageSlider({
  className,
  isMagnified = true,
}: {
  className?: string;
  isMagnified?: boolean;
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className={classNames(className, "h-fit")}>
      <Swiper
        spaceBetween={10}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map(({ alt, id, img }) => (
          <SwiperSlide key={id}>
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
                        alt: alt,
                        isFluidWidth: true,
                        src: img,
                        sizes:
                          "(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px",
                      },
                      largeImage: {
                        src: img,
                        width: 1200,
                        height: 750,
                      },
                      enlargedImageContainerDimensions: {
                        width: "170%",
                        height: "150%",
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
        {images.map(({ alt, id, img }) => (
          <SwiperSlide key={id}>
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
