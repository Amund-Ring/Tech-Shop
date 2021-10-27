import React, { useEffect, useState } from "react";
import * as styles from "../styles/ProductDetails.module.css";

function ProductDetails({ item }) {
  const [selectedColor, setSelectedColor] = useState(
    item.options[0]["color"].toString()
  );

  const getStorageOptions = color => {
    return item.options.find(option => option["color"] == color).storage;
  };

  const [storageOptions, setStorageOptions] = useState(
    getStorageOptions(selectedColor)
  );

  const getPowerOptions = color => {
    return item.options.find(option => option["color"] == color).power;
  };

  const [powerOptions, setPowerOptions] = useState(
    getPowerOptions(selectedColor)
  );

  useEffect(() => {
    setStorageOptions(getStorageOptions(selectedColor));
  }, [selectedColor]);

  const [selectedStorage, setSelectedStorage] = useState([]);
  const [selectedPower, setSelectedPower] = useState([]);

  const optionIsAvailable = (color, amountInCart) => {
    const colorOption = item.options.find(option => option.color == color);
    return (
      typeof colorOption !== "undefined" &&
      colorOption.quantity - amountInCart > 0
    );
  };

  // for (let i = 0; i < item.options.length; i++) {
  //   for (const optionName in item.options[i]) {
  //     console.log(optionName);
  //   }
  // }

  const handleButtonClick = () => {
    console.log("Button was clicked.");
    console.log(selectedColor);
    console.log(storageOptions);
    console.log("selectedStorage", selectedStorage);
    console.log("selectedPower", selectedPower);
  };

  return (
    <div className={styles.productDetails}>
      <h2>{item.name}</h2>
      <h3>{`${item.price},-`}</h3>
      <div className={styles.imageContainer}>
        <img src={`/products/${item.id}.jpg`} alt="Alternative text" />
      </div>

      <div className={styles.details}>
        <div className={styles.detailsText}>
          <p className={styles.detailsName}>Name: {item.name}</p>
          <p>Brand: {item.brand}</p>
          <p>
            Availabilty: {item.available ? "In Stock" : "Currently unavailable"}
          </p>
          <p>Weight: {item.weight}kg</p>
        </div>

        <div className={styles.options}>
          <div className={styles.radioButtons}>
            <p>Colors:</p>
            <div className={styles.colorButtons}>
              {item.options.map((option, index) => {
                return (
                  <div key={index}>
                    <input
                      onClick={() => {
                        setSelectedColor(option["color"].toString());
                      }}
                      type="radio"
                      value={option["color"]}
                      name="color"
                    />{" "}
                    {option["color"]}
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.radioButtons}>
            {storageOptions ? <p>Storage:</p> : ""}
            {
              <div className={styles.optionButtons}>
                {storageOptions
                  ? storageOptions.map((option, index) => {
                      return (
                        <div key={index}>
                          <input
                            onClick={() => {
                              setSelectedStorage(option.toString());
                            }}
                            type="radio"
                            value={option}
                            name="storage"
                          />{" "}
                          {option} GB
                        </div>
                      );
                    })
                  : ""}
              </div>
            }
          </div>

          <div className={styles.radioButtons}>
            {powerOptions ? <p>Power:</p> : ""}
            {
              <div className={styles.optionButtons}>
                {powerOptions
                  ? powerOptions.map((option, index) => {
                      return (
                        <div key={index}>
                          <input
                            onClick={() => {
                              setSelectedPower(option.toString());
                            }}
                            type="radio"
                            value={option}
                            name="power"
                          />{" "}
                          {option}W
                        </div>
                      );
                    })
                  : ""}
              </div>
            }
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
