import React, { useState } from "react";
import Layout from "../components/Layout";
import { getAmountInCart } from "../data/dataHandler";
import CheckoutList from "../components/CheckoutList";
import BackButton from "../components/BackButton";

function Checkout() {
  const [amountInCart, setAmountInCart] = useState(getAmountInCart());

  return (
    <Layout amountInCart={amountInCart}>
      <div className="checkout">
        <BackButton />
        <CheckoutList amountInCart={amountInCart} setAmountInCart={setAmountInCart} />
      </div>
    </Layout>
  );
}

export default Checkout;
