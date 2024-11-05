
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; // Importing styles for pagination
import "swiper/css/autoplay"; // Importing styles for autoplay
import FeatureItem from "./FeatureItem";
import styles from "@/app/styles/FeatureSection.module.css";
import { motion } from "framer-motion";

// Import the necessary Swiper modules from swiper/modules
import { Pagination, Autoplay } from "swiper/modules";

const features = [
  {
    title: "Plant Disease Detection",
    description:
      "Upload plant images for detailed disease analysis, enabling early detection and prevention. Get specific insights and suggestions for timely action to mitigate crop loss.",
    image: "/disease-detection.jpeg",
  },
  {
    title: "Plant Recommendation Based on Soil Information",
    description:
      "Leverage soil data such as pH and nutrient levels to identify the best crops for your land. This leads to optimized land use, better yields, and sustainable farming.",
    image: "/soil-suggestion.jpeg",
  },
  {
    title: "Fertilizer Recommendation",
    description:
      "Receive precise fertilizer suggestions based on crop and soil conditions, ensuring proper growth while cutting unnecessary fertilizer expenses.",
    image: "/fertilizer-suggestion.png",
  },
  {
    title: "Expert Consultation",
    description:
      "Access expert advice to make informed decisions on crop management and cultivation practices for better outcomes.",
    image: "/expert-consultation.png",
  },
];

const FeatureSlider = () => {
  return (
    <motion.section
      className={styles.featureSection}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 2000 }} // Auto-slide every 2 seconds
        pagination={{
          clickable: true, // Make pagination dots clickable
          bulletClass: `${styles.customBullet}`, // Custom class for pagination dots
          bulletActiveClass: `${styles.customBulletActive}`, // Custom class for active bullet
        }}
        modules={[Pagination, Autoplay]} // Use the modules directly here
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <FeatureItem
              title={feature.title}
              description={feature.description}
              image={feature.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
};

export default FeatureSlider;





