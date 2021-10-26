import { navigate } from "gatsby";
import React from "react";
import * as styles from "../styles/ProductCard.module.css";

function ProductCard({ id }) {
  const handleClick = () => {
    console.log("Card clicked.");
    navigate(`/product?id=${id}`);
  };

  return (
    <div className={styles.productCard} onClick={handleClick}>
      <img src={"/1.jpg"} alt="Alternative text" />
      <div>
        <h2>Philips hue bulb - Philips</h2>
        <h3>500,-</h3>
      </div>
    </div>
  );
}

export default ProductCard;
