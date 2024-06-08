import { MotionDiv } from "@/components";
import Image, { StaticImageData } from "next/image";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { landingCarouselData } from "./data";
import LandingCarousel from "./landing-carousel";

export default function Carousel() {
  return (
    <MotionDiv
      initial={{ x: "-100%" }}
      whileInView={{ x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="bg-primary pb-4 md:pb-6"
    >
      <LandingCarousel>
        {landingCarouselData?.map(({ _id, title, url }) => (
          <CarouselCard key={_id} {...{ title, url }} />
        ))}
      </LandingCarousel>
    </MotionDiv>
  );
}

function CarouselCard({ title, url }: { title: string; url: StaticImageData }) {
  return (
    <div className="group cursor-pointer transition-all w-full aspect-[16/7] relative">
      <Image
        fill
        src={url}
        alt={title}
        className="w-full object-cover h-full"
      />
    </div>
  );
}
