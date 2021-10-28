import React, { useEffect, useState } from "react";
import useQueryParam from "../config/useQueryParams";
import { navigate } from "gatsby";
import Layout from "../components/Layout";
import ProductDetails from "../components/ProductDetails";
import productData from "../data/products.json";
import { addToCart, getAmountInCart } from "../data/dataHandler";


function Product() {
  const [productId] = useQueryParam("id", 1);

  const [amountInCart, setAmountInCart] = useState(getAmountInCart());

  // useEffect(() => {
  //   setAmountInCart(getAmountInCart());
  // }, []);

  const updateCart = (item) => {
    addToCart(item);
    setAmountInCart(amountInCart + 1);
  }
  

  if (typeof productId === "undefined" || isNaN(productId)) {
    navigate("/404");
  }

  const productItem = productData.items.find(
    item => item.id === parseInt(productId, 10)
  );

  if (typeof productItem === "undefined") {
    navigate("/404");
  }

  const goBack = () => {
    navigate("/products");
  };

  return (
    <Layout amountInCart={amountInCart}>
      <div className="item">
        <h3 onClick={goBack}>{`<-- Back`}</h3> {/* eslint-disable-line */}
        <ProductDetails item={productItem} amountInCart={amountInCart} updateCart={updateCart} />
      </div>
    </Layout>
  );
}

export default Product;
