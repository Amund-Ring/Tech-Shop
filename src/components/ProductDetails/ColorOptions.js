import React from "react";
import * as styles from "../../styles/ProductDetails.module.css";

function ColorOptions({ item, setSelectedColor }) {
  return (
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
                defaultChecked={index === 0}
              />{" "}
              {option["color"]}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ColorOptions;
