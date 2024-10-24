"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../app/styles/FAQ.module.css";

const faqData = [
  {
    question: "What is this platform, and how can it help me as a farmer?",
    answer:
      "This platform provides AI-powered tools to help farmers detect plant diseases, recommend crops based on soil data, suggest the right fertilizers, and offer expert consultations to optimize farming practices.",
  },
  {
    question: "How do I upload an image to detect plant diseases?",
    answer:
      "After logging in, go to the “Plant Disease Detection” section, and upload a clear image of the affected plant. The system will analyze the image and provide detailed results.",
  },
  {
    question: "What kind of soil data is required for crop recommendations?",
    answer:
      "You need to input basic soil parameters like pH level, nitrogen, phosphorus, and potassium levels. The platform will then suggest the best crops suited for your land.",
  },
  {
    question: "How accurate are the crop and fertilizer recommendations?",
    answer:
      "The recommendations are based on extensive datasets and machine learning algorithms. While highly accurate, it’s advised to consult an expert if you have specific concerns.",
  },
  {
    question: "How do I consult an agricultural expert on the platform?",
    answer:
      "To consult with an expert, go to the 'Expert Consultation' section and chat with an expert. You can either ask questions directly or share images for advice.",
  },
  {
    question: "Will there be more features added to the platform?",
    answer:
      "Yes, we are continuously working to add more features, such as pest detection, yield prediction, and integration with smart farming tools.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.section
      className={styles.faqSection}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.faqContainer}>
        <div className={styles.imageContainer}>
          <img src="/FAQ.png" alt="FAQ" className={styles.faqImage} />
        </div>
        <motion.div
          className={styles.faqContent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delayChildren: 0.3, staggerChildren: 0.2 }}
        >
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              className={styles.faqBox}
              whileHover={{ scale: 1.05 }}
              onClick={() => toggleFAQ(index)}
              layout
            >
              <motion.div className={styles.faqQuestion}>
                <span>{item.question}</span>
                <motion.span
                  className={styles.arrow}
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.span>
              </motion.div>
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    className={styles.faqAnswer}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FAQ;
