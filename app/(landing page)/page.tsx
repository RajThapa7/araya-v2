import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/features/HeroSection"));
const FeaturedSection = dynamic(() => import("@/features/FeaturedSection"));
const Carousel = dynamic(() => import("@/features/LandingCarousel"));
const SecondFeaturedSection = dynamic(
  () => import("@/features/SecondFeaturedSection")
);
const ClickToAction = dynamic(() => import("@/features/CTA"));
const Testimonials = dynamic(() => import("@/features/Testimonials"));

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedSection />
      <Carousel />
      <SecondFeaturedSection />
      <ClickToAction />
      <Testimonials />
    </div>
  );
}
