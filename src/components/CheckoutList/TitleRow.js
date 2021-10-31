import React from "react";
import * as styles from "../../styles/CheckoutList.module.css";

function TitleRow() {
  return (
    <div className={styles.itemLine}>
      <span className={`${styles.description} ${styles.descriptionTitle}`}>
        Item
      </span>
      <span className={styles.amount}>Amount</span>
      <span className={styles.priceTitle}>Price</span>
      <span className={`${styles.bin} ${styles.binTitle}`}>Bin</span>
    </div>
  );
}

export default TitleRow;
