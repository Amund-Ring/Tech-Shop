import React, { useState } from "react";
import * as styles from "../styles/ProductDetails.module.css";

function ProductDetails({ item }) {
  const [selectedColor, setSelectedColor] = useState(
    item.options[0]["color"][0]
  );
  const [selectedStorage, setSelectedStorage] = useState(
    item.options[0]["storage"] || "No storage option"
  );

  const optionIsAvailable = (color, amountInCart) => {
    const colorOption = item.options.find(option => option.color == color);
    return (
      typeof colorOption !== "undefined" &&
      colorOption.quantity - amountInCart > 0
    );
  };

  const handleButtonClick = () => {
    console.log("Button was clicked.");
  };

  console.log(item.options);
  console.log(selectedStorage);

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
        <p>Availabilty: {item.available ? "In Stock" : "Sold Out"}</p>
        <p>Weight: {item.weight}kg</p>
        <div className={styles.options}>
          <div className={styles.colorOptions}>
            <p>Colors:</p>

            {item.options.map((option, index) => {
              return (
                <>
                  <input type="radio" value={option["color"]} name="color" /> {option["color"]}
                </>
              );
            })}
          </div>

          {/* {item.options.map((option, index) => {
            return <div>
              <p>Color: {option["color"]}</p>
              <p>{option["storage"] ? `Storage: ${option["storage"]}` : ""}</p>
            </div>
          })} */}
        </div>
        <button onClick={handleButtonClick}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;
