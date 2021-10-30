import { navigate } from "gatsby-link";
import React, { useEffect, useState } from "react";
import {
  getSortedCart,
  getTotalSum,
  removeLineFromCart,
  removeSingleItemFromCart,
  addAnotherItemLine
} from "../data/dataHandler";
import * as styles from "../styles/CheckoutList.module.css";

function CheckoutList({ amountInCart, setAmountInCart }) {
  const [sortedCart, setSortedCart] = useState(getSortedCart());
  const [total, setTotal] = useState(getTotalSum());

  useEffect(() => {
    setSortedCart(getSortedCart());
    setTotal(getTotalSum());
  }, [amountInCart]);

  return (
    <div className={styles.checkoutList}>
      <div className={styles.listContainer}>
        <div className={styles.itemLine}>
          <span className={`${styles.description} ${styles.descriptionTitle}`}>
            Item
          </span>
          <span className={styles.amount}>Amount</span>
          <span className={styles.priceTitle}>Price</span>
          <span className={`${styles.bin} ${styles.binTitle}`}>Bin</span>
        </div>
        {sortedCart.map((item, index) => {
          return (
            <div className={styles.itemLine} key={index}>
              <span
                onClick={() => {
                  navigate(`/product/?id=${item[0].productId}`);
                }}
                className={styles.description}
              >
                {`${item[0].name}
                 - ${item[0].color}
                ${item[0].storage ? " - " : ""}
                ${item[0].storage ? item[0].storage : ""}
                ${item[0].storage ? " GB" : ""}
                ${item[0].power ? " - " : ""}
                ${item[0].power ? item[0].power : ""}
                ${item[0].power ? " W" : ""}`}
              </span>
              <span className={styles.amount}>
                <div className={styles.amountAdjust}>
                  <span
                    className={styles.adjustIncrDecr}
                    onClick={() => {
                      setAmountInCart(
                        removeSingleItemFromCart(item[0].lineItemId)
                      );
                    }}
                  >
                    –
                  </span>
                  <span className={styles.amountNr}>{item.length}</span>
                  <span
                    className={styles.adjustIncrDecr}
                    onClick={() => {
                      setAmountInCart(
                        addAnotherItemLine(item[0])
                      );
                    }}
                  >
                    +
                  </span>
                </div>
              </span>
              <span className={styles.price}>{`${item[0].price},-`}</span>
              <span
                onClick={() => {
                  setAmountInCart(
                    removeLineFromCart(item[0].productId, item[0].color)
                  );
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
        <h3>Total: <span>{Number(total).toLocaleString("no")},-</span></h3>
      </div>
    </div>
  );
}

export default CheckoutList;
