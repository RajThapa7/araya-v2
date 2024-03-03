import {
  CTA,
  Carousel,
  FeaturedSection,
  Footer,
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
      <Footer />
    </div>
  );
}
