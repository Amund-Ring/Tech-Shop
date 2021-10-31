import React, { useEffect, useState } from "react";
import { navigate } from "gatsby-link";
import * as styles from "../../styles/CheckoutList.module.css";
import {
  removeLineFromCart,
  removeSingleItemFromCart,
  addAnotherItemLine,
  colorIsAvailable,
} from "../../data/dataHandler";

function LineItem({ item, amountInCart, setAmountInCart }) {
  const [plusButtonEnabled, setPlusButtonEnabled] = useState(
    colorIsAvailable(
      item[item.length - 1].productId,
      item[item.length - 1].color
    )
  );

  useEffect(() => {
    setPlusButtonEnabled(
      colorIsAvailable(
        item[item.length - 1].productId,
        item[item.length - 1].color
      )
    );
  }, [amountInCart]);

  return (
    <div className={styles.itemLine}>
      <span
        onClick={() => {
          navigate(`/product/?id=${item[item.length - 1].productId}`);
        }}
        className={styles.description}
        onKeyDown={() => {
          navigate(`/product/?id=${item[item.length - 1].productId}`);
        }}
        role="button"
        tabIndex={[]}
      >
        {`${item[item.length - 1].name}
                 - ${item[item.length - 1].color}
                ${item[item.length - 1].storage ? " - " : ""}
                ${
                  item[item.length - 1].storage
                    ? item[item.length - 1].storage
                    : ""
                }
                ${item[item.length - 1].storage ? " GB" : ""}
                ${item[item.length - 1].power ? " - " : ""}
                ${
                  item[item.length - 1].power ? item[item.length - 1].power : ""
                }
                ${item[item.length - 1].power ? " W" : ""}`}
      </span>
      <span className={styles.amount}>
        <div className={styles.amountAdjust}>
          <span
            className={styles.adjustIncrDecr}
            onClick={() => {
              setAmountInCart(
                removeSingleItemFromCart(item[item.length - 1].lineItemId)
              );
            }}
            onKeyDown={() => {
              setAmountInCart(
                removeSingleItemFromCart(item[item.length - 1].lineItemId)
              );
            }}
            role="button"
            tabIndex={[]}
          >
            –
          </span>
          <span className={styles.amountNr}>{item.length}</span>
          <span
            className={
              plusButtonEnabled ? styles.adjustIncrDecr : styles.plusDisabled
            }
            onClick={() => {
              setAmountInCart(addAnotherItemLine(item[item.length - 1]));
            }}
            onKeyDown={() => {
              setAmountInCart(addAnotherItemLine(item[item.length - 1]));
            }}
            role="button"
            tabIndex={[]}
          >
            +
          </span>
        </div>
      </span>
      <span className={styles.price}>
        <span>{`${item[item.length - 1].price},-`}</span>
      </span>
      <span
        onClick={() => {
          setAmountInCart(
            removeLineFromCart(
              item[item.length - 1].productId,
              item[item.length - 1].color
            )
          );
        }}
        className={styles.bin}
        onKeyDown={() => {
          setAmountInCart(
            removeLineFromCart(
              item[item.length - 1].productId,
              item[item.length - 1].color
            )
          );
        }}
        role="button"
        tabIndex={[]}
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
}

export default LineItem;
