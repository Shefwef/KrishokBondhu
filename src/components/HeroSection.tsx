'use client';
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5, ease: 'easeInOut', delay: 0.5 } },
    hover: { scale: 1.1, backgroundColor: '#d9f99d', transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/HeroVideo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Fade effect at top and bottom */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black via-transparent to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>

      {/* Overlay to darken the video for better text visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      {/* Animated Content on top of video */}
      <motion.div
        className="relative flex flex-col items-center justify-center h-full text-center z-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="text-6xl font-bold text-white drop-shadow-lg" variants={textVariants}>
          কৃষক বন্ধু
        </motion.h1>
        <motion.p className="mt-4 text-xl text-white drop-shadow-md" variants={textVariants}>
          Your AI-Powered Agriculture Assistance Platform
        </motion.p>

        <motion.button
          className="mt-6 px-8 py-4 text-lg font-semibold bg-white rounded-lg shadow-lg hover:bg-green-950 hover:shadow-2xl transition-all"
          variants={buttonVariants}
          whileHover="hover"
        >
          Explore Features
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;

