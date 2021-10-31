import React, { useEffect, useState } from "react";
import * as styles from "../../styles/ProductDetails.module.css";
import { colorIsAvailable } from "../../data/dataHandler";

import ColorOptions from "./ColorOptions";
import PowerOptions from "./PowerOptions";
import StorageOptions from "./StorageOptions";

function ProductDetails({ item, amountInCart, addItemToCart }) {
  const getStorageOptions = color => {
    return item.options.find(option => option["color"] == color).storage;
  };

  const getPowerOptions = color => {
    return item.options.find(option => option["color"] == color).power;
  };

  const [selectedColor, setSelectedColor] = useState(
    item.options[0]["color"].toString()
  );
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [selectedPower, setSelectedPower] = useState(null);

  const [storageOptions, setStorageOptions] = useState([]);
  const [powerOptions, setPowerOptions] = useState([]);
  const [colorAvailable, setColorAvailable] = useState(
    colorIsAvailable(item.id, selectedColor)
  );

  useEffect(() => {
    const storageChoices = getStorageOptions(selectedColor);
    setStorageOptions(storageChoices);
    if (typeof storageChoices !== "undefined") {
      setSelectedStorage(storageChoices[0]);
    }
  }, [selectedColor]);

  useEffect(() => {
    const powerChoices = getPowerOptions(selectedColor);
    setPowerOptions(powerChoices);
    if (typeof powerChoices !== "undefined") {
      setSelectedPower(powerChoices[0]);
    }
  }, [selectedColor]);

  useEffect(() => {
    setColorAvailable(colorIsAvailable(item.id, selectedColor));
  }, [selectedColor]);

  const handleButtonClick = () => {
    if (colorAvailable) {
      const newCartObject = {
        lineItemId: Date.now(),
        productId: item.id,
        name: item.name,
        price: item.price,
        color: selectedColor,
        storage: selectedStorage,
        power: selectedPower,
      };

      addItemToCart(newCartObject);
      setColorAvailable(colorIsAvailable(item.id, selectedColor));
    }
  };

  return (
    <div className={styles.productDetails}>
      <h2>{item.name}</h2>
      <h3>{`${item.price},-`}</h3>
      <div className={styles.imageContainer}>
        <img src={`/products/${item.id}.jpg`} alt={item.name} />
      </div>

      <div className={styles.details}>
        <div className={styles.detailsText}>
          <p className={styles.detailsName}>{item.name}</p>
          <p>Brand: {item.brand}</p>
          <p>Availability: {item.available ? "In stock" : "Not available"}</p>
          <p>Weight: {item.weight}kg</p>
        </div>

        <div className={styles.options}>
          <ColorOptions item={item} setSelectedColor={setSelectedColor} />

          <PowerOptions
            item={item}
            powerOptions={powerOptions}
            setSelectedPower={setSelectedPower}
          />

          <StorageOptions
            item={item}
            storageOptions={storageOptions}
            setSelectedStorage={setSelectedStorage}
          />
        </div>

        <button
          onClick={handleButtonClick}
          className={`${
            colorAvailable ? styles.availableButton : styles.unavailableButton
          }`}
        >{`${colorAvailable ? "Add to Cart" : "Not available"}`}</button>
      </div>
    </div>
  );
}

export default ProductDetails;
