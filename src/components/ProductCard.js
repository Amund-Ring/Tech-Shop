import React from "react";
import { navigate } from "gatsby";
import * as styles from "../styles/ProductCard.module.css";

function ProductCard({ item }) {
  const handleClick = () => {
    navigate(`/product?id=${item.id}`);
  };

  return (
    <div
      className={styles.productCard}
      onClick={handleClick}
      onKeyDown={handleClick}
      role="button"
      tabIndex={[]}
    >
      <img src={`/products/${item.id}.jpg`} alt={item.name} />
      <div>
        <h2>{`${item.name}`}</h2>
        <h3>{`${item.price},-`}</h3>
      </div>
    </div>
  );
}

export default ProductCard;
