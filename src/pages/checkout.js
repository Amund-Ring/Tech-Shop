import React, { useState } from "react";
import Layout from "../components/Layout";
import CheckoutList from "../components/CheckoutList/CheckoutList";
import BackButton from "../components/BackButton";
import { getAmountInCart } from "../data/dataHandler";

function Checkout() {
  const [amountInCart, setAmountInCart] = useState(getAmountInCart());

  return (
    <Layout amountInCart={amountInCart}>
      <div className="checkout">
        <BackButton />
        <CheckoutList
          amountInCart={amountInCart}
          setAmountInCart={setAmountInCart}
        />
      </div>
    </Layout>
  );
}

export default Checkout;
