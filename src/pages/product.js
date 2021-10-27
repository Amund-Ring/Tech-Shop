import React from "react";
import useQueryParam from "../components/useQueryParams";
import { navigate } from "gatsby";
import Layout from "../components/Layout";
import ProductDetails from "../components/ProductDetails";
import productData from "../data/products.json";

function Product() {
  const [productId] = useQueryParam("id", 1);

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
    <Layout>
      <div className="item">
        <h3 onClick={goBack}>{`<-- Back`}</h3> {/* eslint-disable-line */}
        <ProductDetails item={productItem} />
      </div>
    </Layout>
  );
}

export default Product;
