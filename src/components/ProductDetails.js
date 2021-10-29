import React, { useEffect, useState } from "react";
import * as styles from "../styles/ProductDetails.module.css";
import Navbar from "./Navbar";
import { addToCart, getQuantityAvailable, itemIsAvailable, colorIsAvailable } from "../data/dataHandler";

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
  const [selectedStorage, setSelectedStorage] = useState([]);
  const [selectedPower, setSelectedPower] = useState([]);

  const [storageOptions, setStorageOptions] = useState([]);
  const [powerOptions, setPowerOptions] = useState([]);
  const [colorAvailable, setColorAvailable] = useState(colorIsAvailable(item.id, selectedColor));


  useEffect(() => {
    const storageChoices = getStorageOptions(selectedColor);
    setStorageOptions(storageChoices);
    if (typeof storageChoices !== 'undefined') {
      setSelectedStorage(storageOptions[0]);
    }
  }, []);

  useEffect(() => {
    const powerChoices = getPowerOptions(selectedColor);
    setPowerOptions(powerChoices);
    if (typeof powerChoices !== 'undefined') {
      setSelectedStorage(powerChoices[0]);
    }
  }, []);

  useEffect(() => {
    setColorAvailable(colorIsAvailable(item.id, selectedColor));
  }, [selectedColor])

  // useEffect(() => {
  //   setPowerOptions(getPowerOptions(selectedColor));
  // }, []);

  // useEffect(() => {
  //   setPowerOptions(getPowerOptions(selectedColor));
  // }, []);


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

  // const buttonActivation = () => {
  //   if(!colorOptionClicked) {
  //     return false;
  //   }

  //   if (!storageOptionClicked) {
  //     return false;
  //   }

  //   if (!powerOptionClicked) {
  //     return false;
  //   }

  //   return true;
  // }
  

  const handleButtonClick = () => {
    // console.log("Button was clicked.");
    // console.log("selectedColor", selectedColor);
    // console.log("selectedStorage", selectedStorage);
    // console.log("selectedPower", selectedPower);
    // console.log("storageOptions", storageOptions);
    // console.log("powerOptions", powerOptions);

    // console.log('Button should be activated:', buttonActivation());

    // const newCartObject = {
    //   item: item.id,
    //   color: selectedColor,
    //   storage: selectedStorage,
    //   power: selectedPower
    // }

    // addItemToCart(newCartObject);
    if (colorAvailable) {
      console.log('sir');
      console.log(getQuantityAvailable(3, 'white'));
      console.log(getQuantityAvailable(3, 'black'));
      console.log('itemIsAvailable', itemIsAvailable(3));
      console.log('itemIsAvailable', itemIsAvailable(5));
    } else {
      console.log('its unavailable');
      console.log(colorIsAvailable(5, 'black'))
      console.log(colorIsAvailable(5, 'white'))
      console.log(colorIsAvailable(1, 'white'))

    }

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
        <p className={styles.detailsName}>{item.name}</p>
          <p>Brand: {item.brand}</p>
          <p>
            Availability: {item.available ? "In Stock" : "Not available"}
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
                        // setColorAvailable(colorIsAvailable(item.id, selectedColor));
                        // console.log(selectedColor);
                      }}
                      type="radio"
                      value={option["color"]}
                      name="color"
                      defaultChecked={index === 0}
                    />{" "}
                    {option["color"]}
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`${storageOptions ? styles.radioButtons : styles.hidden}`}>
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
                            defaultChecked={index === 0}
                          />{" "}
                          {option} GB
                        </div>
                      );
                    })
                  : ""}
              </div>
            }
          </div>

          <div className={`${powerOptions ? styles.radioButtons : styles.hidden}`}>
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
                              // setPowerOptionClicked(true);
                            }}
                            type="radio"
                            value={option}
                            name="power"
                            defaultChecked={index === 0}
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
        <button onClick={handleButtonClick} className={`${colorAvailable ? styles.availableButton : styles.unavailableButton}`}>{`${colorAvailable ? 'Add to Cart' : 'Not available'}`}</button>
      </div>
    </div>
  );
}

export default ProductDetails;
