// import HeroSection from "../components/HeroSection";
// import FeatureSlider from "../components/FeatureSlider";
// import SlidingBar from "@/components/SlidingBar";
// import FAQ from "@/components/faq";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { ClerkProvider } from "@clerk/nextjs";

// export default function Home() {
//   return (
//     <>
//         <Navbar />
//         <HeroSection />
//         <SlidingBar />
//         <FeatureSlider />
//         <FAQ />
//         <Footer />
//     </>
//   );
// }

"use client"; 
import React, { useRef } from "react";
import HeroSection from "../components/HeroSection";
import FeatureSlider from "../components/FeatureSlider";
import SlidingBar from "@/components/SlidingBar";
import FAQ from "@/components/faq";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const featureSliderRef = useRef<HTMLDivElement | null>(null);

  const scrollToFeatures = () => {
    if (featureSliderRef.current) {
      featureSliderRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <HeroSection onExploreClick={scrollToFeatures} />
      <SlidingBar />
      <div ref={featureSliderRef}>
        <FeatureSlider />
      </div>
      <FAQ />
      <Footer />
    </>
  );
}
