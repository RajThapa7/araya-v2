import { MotionDiv } from "@/components";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import TestimonialCarouselCard from "./CarouselCard";
import { testimonialData } from "./data";
import TestimonialCarousel from "./testimonial-carousel";

const slider = {
  inView: {
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
      duration: 0.5,
      ease: [0.5, 1, 0.89, 1],
    },
  },
  hidden: {
    y: 200,
  },
};

export default function Testimonials() {
  return (
    <div className="pb-12 px-6 bg-primary-dark py-20 lg:py-32">
      <MotionDiv
        variants={slider}
        initial="hidden"
        whileInView={"inView"}
        viewport={{ once: true }}
        className="mx-auto max-w-screen-xl"
      >
        <TestimonialCarousel>
          {testimonialData?.map(
            ({ _id, title, description, name, imageUrl }) => (
              <TestimonialCarouselCard
                key={_id}
                {...{ title, name, description, imageUrl }}
              />
            )
          )}
        </TestimonialCarousel>
      </MotionDiv>
    </div>
  );
}
