import HeroSection from "../components/HeroSection";
import FeatureSlider from "../components/FeatureSlider";
import SlidingBar from "@/components/SlidingBar";
import FAQ from "@/components/faq";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SlidingBar />
      <FeatureSlider />
      <FAQ/>
    </>
  );
}
