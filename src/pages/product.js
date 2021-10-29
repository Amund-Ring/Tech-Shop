import React, { useState } from "react";
import useQueryParam from "../config/useQueryParams";
import { navigate } from "gatsby";
import Layout from "../components/Layout";
import ProductDetails from "../components/ProductDetails";
import { addToCart, getAmountInCart, getItem } from "../data/dataHandler";
import BackButton from "../components/BackButton";

function Product() {
  const [productId] = useQueryParam("id", 1);

  const [amountInCart, setAmountInCart] = useState(getAmountInCart());

  const addItemToCart = item => {
    addToCart(item);
    setAmountInCart(amountInCart + 1);
  };

  if (typeof productId === "undefined" || isNaN(productId)) {
    navigate("/404");
  }

  const productItem = getItem(productId);

  if (typeof productItem === "undefined") {
    navigate("/404");
  }


  return (
    <Layout amountInCart={amountInCart}>
      <div className="product">
        <BackButton />
        <ProductDetails
          item={productItem}
          amountInCart={amountInCart}
          addItemToCart={addItemToCart}
        />
      </div>
    </Layout>
  );
}

export default Product;
