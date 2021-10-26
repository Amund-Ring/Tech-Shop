import React from "react";
import { useQueryParam, NumberParam } from "use-query-params";
import { navigate } from "gatsby";
import Layout from "../components/Layout";
import productData from "../../content/products.json";
import ProductDetails from "../components/ProductDetails";

function Product() {
  const [productId] = useQueryParam("id", NumberParam);

  if (typeof productId === "undefined" || isNaN(productId)) {
    navigate("/404");
  }

  const productItem = productData.items.find(item => item.id === productId);

  if (typeof productItem === "undefined") {
    navigate("/404");
  }

  const goBack = () => {
    navigate("/products");
  }
  

  return (
    <Layout>
      <div className="item">
        <h3 onClick={goBack}>{`<-- Back`}</h3>
        <ProductDetails item={productItem} />
      </div>
    </Layout>
  );
}

export default Product;
