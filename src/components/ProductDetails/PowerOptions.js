import React from "react";
import * as styles from "../../styles/ProductDetails.module.css";

function PowerOptions({ powerOptions, setSelectedPower }) {
  return (
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
  );
}

export default PowerOptions;
