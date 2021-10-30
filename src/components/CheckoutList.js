import { navigate } from "gatsby-link";
import React, { useEffect, useState } from "react";
import { getCartFromLocalStorage, removeFromCart } from "../data/dataHandler";
import * as styles from "../styles/CheckoutList.module.css";

function CheckoutList({ amountInCart, setAmountInCart }) {
  const [shoppingCart, setShoppingCart] = useState(getCartFromLocalStorage());

  useEffect(() => {
    setShoppingCart(getCartFromLocalStorage());
  }, [amountInCart]);


  return (
    <div className={styles.checkoutList}>
      <div className={styles.listContainer}>
        <div className={styles.itemLine}>
          <span className={styles.description}>Item</span>
          <span className={styles.amount}>Amount</span>
          <span className={styles.priceTitle}>Price</span>
          <span className={styles.bin}>Bin</span>
        </div>
        {shoppingCart.map((item, index) => {
          return (
            <div className={styles.itemLine} key={index}>
              <span
                onClick={() => {
                  navigate(`/product/?id=${item.productId}`);
                }}
                className={styles.description}
              >
                {`${item.name}
                 - ${item.color}
                ${item.storage ? " - " : ""}
                ${item.storage ? item.storage : ""}
                ${item.storage ? " GB" : ""}
                ${item.power ? " - " : ""}
                ${item.power ? item.power : ""}
                ${item.power ? " W" : ""}`}
              </span>
              <span className={styles.amount}>
                <div className={styles.amountAdjust}>
                  <span className={styles.adjustIncrDecr}>–</span>
                  <span className={styles.amountNr}>3</span>
                  <span className={styles.adjustIncrDecr}>+</span>
                </div>
              </span>
              <span className={styles.price}>{`${item.price},-`}</span>
              <span
                onClick={() => {
                  removeFromCart(item.lineItemId);
                  setAmountInCart(amountInCart - 1);
                }}
                className={styles.bin}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                </svg>
              </span>
            </div>
          );
        })}

        {/* <div className={styles.itemLine}></div>
        <div className={styles.itemLine}></div>
        <div className={styles.itemLine}></div>
        <div className={styles.itemLine}></div>
        <div className={styles.itemLine}></div>
        <div className={styles.itemLine}></div>
        <div className={styles.itemLine}></div>
        <div className={styles.itemLine}></div>
        <div className={styles.itemLine}></div> */}
      </div>
      <div className={styles.totalContainer}>
        <h3>Total: </h3>
      </div>
    </div>
  );
}

export default CheckoutList;
