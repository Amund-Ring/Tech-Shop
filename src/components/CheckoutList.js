import React from 'react'
import * as styles from "../styles/CheckoutList.module.css";

function CheckoutList({ setAmountInCart }) {
  return (
    <div className={styles.checkoutList}>
      <div className={styles.listContainer}></div>
      <div className={styles.totalContainer}></div>
    </div>
  )
}

export default CheckoutList
