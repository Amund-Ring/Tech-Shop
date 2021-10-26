import { navigate } from "gatsby";
import React from "react";
import * as styles from "../styles/ProductCard.module.css";

function ProductCard({ item }) {
  const handleClick = () => {
    navigate(`/product?id=${item.id}`);
  };

  return (
    <div className={styles.productCard} onClick={handleClick} onKeyDown={handleClick} role="button" tabIndex={item}>
      <img src={`/products/${item.id}.jpg`} alt="Alternative text" />
      <div>
        <h2>{`${item.name}`}</h2>
        <h3>{`${item.price},-`}</h3>
      </div>
    </div>
  );
}

export default ProductCard;
