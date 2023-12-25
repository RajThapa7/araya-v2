import Carousel from "@/features/Carousel";
import FeaturedSection from "@/features/FeaturedSection";
import HeroSection from "@/features/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturedSection />
      <Carousel />
    </div>
  );
}
