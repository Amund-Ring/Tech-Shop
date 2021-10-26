import React from "react";
import Layout from "./Layout";
import * as styles from "../styles/ProductDetails.module.css";

function ProductDetails({ item }) {
  return (
    <div className={styles.productDetails}>
      <h2>{item.name}</h2>
      <h3>{`${item.price},-`}</h3>
      <div className={styles.imageContainer}>
        <img src={`/products/${item.id}.jpg`} alt="Alternative text" />
      </div>
      <div className={styles.details}>

      </div>
    </div>
  );
}

export default ProductDetails;
