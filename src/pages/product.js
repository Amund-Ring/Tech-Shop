import React, { useState } from "react";
import { navigate } from "gatsby";
import useQueryParam from "../config/useQueryParams";
import Layout from "../components/Layout";
import BackButton from "../components/BackButton";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import { addToCart, getAmountInCart, getItem } from "../data/dataHandler";

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
