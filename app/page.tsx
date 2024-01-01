import CTA from "@/features/CTA";
import Carousel from "@/features/Carousel";
import FeaturedSection from "@/features/FeaturedSection";
import Footer from "@/features/Footer";
import HeroSection from "@/features/HeroSection";
import Testimonials from "@/features/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturedSection />
      <Carousel />
      <CTA />
      <Testimonials />
      <Footer />
    </div>
  );
}
