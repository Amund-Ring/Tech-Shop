import React from "react";
import * as styles from "../../styles/ProductDetails.module.css";

function StorageOptions({ item, storageOptions, setSelectedStorage }) {
  return (
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
  );
}

export default StorageOptions;
