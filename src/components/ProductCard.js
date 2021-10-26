import { navigate } from "gatsby";
import React, { useEffect, useState } from "react";
import * as styles from "../styles/ProductCard.module.css";

function ProductCard({ item }) {
  const handleClick = () => {
    console.log("Card clicked.");
    navigate(`/product?id=${item.id}`);
  };

  return (
    <div className={styles.productCard} onClick={handleClick}>
      <img src={`/products/${item.id}.jpg`} alt="Alternative text" />
      <div>
        {/* <h2>{`${item.name} - ${item.brand}`}</h2> */}
        <h2>{`${item.name}`}</h2>
        <h3>{`${item.price},-`}</h3>
      </div>
    </div>
  );
}

export default ProductCard;
