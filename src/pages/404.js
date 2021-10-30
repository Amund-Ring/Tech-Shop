import React, { useState } from "react";
import Layout from "../components/Layout";
import { getAmountInCart } from "../data/dataHandler";


function NotFound() {

  const [amountInCart, setAmountInCart] = useState(getAmountInCart());

  return (
    <Layout amountInCart={amountInCart}>
      <div className='notFound'>
        <h3>404 - Page not found</h3>
      </div>
    </Layout>
  );
}

export default NotFound;
