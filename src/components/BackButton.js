import React from "react";
import { navigate } from "gatsby";
import * as styles from "../styles/BackButton.module.css";
import "boxicons";

function BackButton() {
  const goBack = () => {
    navigate("/products");
  };

  return (
    <div onClick={goBack} className={styles.backButton}>
      <box-icon
        name="left-arrow-circle"
        size="lg"
        animation="fade-left-hover"
      ></box-icon>
      {/* //animation='fade-left' */}
    </div>
  );
}

export default BackButton;
