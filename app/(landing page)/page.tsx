import LandingFooter from "@/components/LandingFooter";
import {
  CTA,
  Carousel,
  FeaturedSection,
  HeroSection,
  SecondFeaturedSection,
  Testimonials,
} from "@/features";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturedSection />
      <Carousel />
      <SecondFeaturedSection />
      <CTA />
      <Testimonials />
      <LandingFooter />
    </div>
  );
}
