import React from "react";
import * as styles from "../styles/ProductDetails.module.css";

function ProductDetails({ item }) {

  const handleButtonClick = () => {
    console.log('Button was clicked.');
  }
  

  return (
    <div className={styles.productDetails}>
      <h2>{item.name}</h2>
      <h3>{`${item.price},-`}</h3>
      <div className={styles.imageContainer}>
        <img src={`/products/${item.id}.jpg`} alt="Alternative text" />
      </div>
      <div className={styles.details}>
        <p>Name: {item.name}</p>
        <p>Brand: {item.brand}</p>
        <p>Availabilty: {item.available ? 'In Stock' : 'Sold Out'}</p>
        <p>Weight: {item.weight}kg</p>
        <div className={styles.options}>

        </div>
        <button onClick={handleButtonClick}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;
