"use client";
import React from "react";
import styles from "@/app/styles/SlidingBar.module.css";

const plantDiseaseIcon = "/plant-disease-icon.png";
const fertilizerSuggestionIcon = "/fertilizer-suggestion-icon.png";
const soilSuggestionIcon = "/soil-suggestion-icon.png";
const expertConsultIcon = "/expert-consult-icon.png";
const pestControlIcon = "/pest-control-icon.png";
const verticalFarmingIcon = "/vertical-farming-icon.svg";

const SlidingBar = () => {
  return (
    <div className={styles.slidingBar}>
      <div className={styles.slidingBarContent}>
        <div className={styles.slidingItem}>
          <img src={plantDiseaseIcon} alt="Pest Control" />
          Plant Disease Detection
        </div>
        <div className={styles.slidingItem}>
          <img src={fertilizerSuggestionIcon} alt="Vertical Farming" />
          Fertilizer Suggestion
        </div>
        <div className={styles.slidingItem}>
          <img src={soilSuggestionIcon} alt="Fertilizer" />
          Soil Recommendation
        </div>
        <div className={styles.slidingItem}>
          <img src={expertConsultIcon} alt="Urban Agriculture" />
          Expert Consultation
        </div>
        <div className={styles.slidingItem}>
          <img src={pestControlIcon} alt="Pest Control" />
          Pest Control
        </div>
        <div className={styles.slidingItem}>
          <img src={verticalFarmingIcon} alt="Vertical Farming" />
          Vertical Farming Solutions
        </div>
      </div>
    </div>
  );
};

export default SlidingBar;
