import React from "react";
import * as styles from "../../styles/CheckoutList.module.css";

function TotalRow({ total }) {
  return (
    <div className={styles.totalContainer}>
      <h3>
        Total: <span>{Number(total).toLocaleString("no")},-</span>
      </h3>
    </div>
  );
}

export default TotalRow;
