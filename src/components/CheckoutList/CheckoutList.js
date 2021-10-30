import React, { useEffect, useState } from "react";
import * as styles from "../../styles/CheckoutList.module.css";
import { getSortedCart, getTotalSum } from "../../data/dataHandler";
import LineItem from "./LineItem";
import TitleRow from "./TitleRow";
import TotalRow from "./TotalRow";

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
        <TitleRow />
        {sortedCart.map((item, index) => {
          return (
            <LineItem
              item={item}
              key={index}
              setAmountInCart={setAmountInCart}
            />
          );
        })}
      </div>
      <TotalRow total={total}/>
    </div>
  );
}

export default CheckoutList;
