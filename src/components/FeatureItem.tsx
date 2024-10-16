import React from "react";
import { motion } from "framer-motion";
import styles from "@/app/styles/FeatureSection.module.css";

interface FeatureItemProps {
  title: string;
  description: string;
  image: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <motion.div
      className={styles.featureItem}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.textSection}>
        <motion.h2
          className={styles.title}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className={styles.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {description}
        </motion.p>
      </div>
      <motion.div
        className={styles.imageContainer}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img src={image} alt={title} className={styles.image} />
      </motion.div>
    </motion.div>
  );
};

export default FeatureItem;



