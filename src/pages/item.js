import React from "react";
import { useQueryParam, NumberParam } from "use-query-params";
import { navigate } from "gatsby";
import Layout from "../components/Layout";
import productData from "../../content/products.json";
import ProductDetails from "../components/ProductDetails";

function Item() {
  const [productId] = useQueryParam("id", NumberParam);

  if (typeof productId === "undefined" || isNaN(productId)) {
    navigate("/404");
  }

  const productItem = productData.items.find(item => item.id === productId);

  if (typeof productItem === "undefined") {
    navigate("/404");
  }

  return (
    <Layout>
      <div className="item">
        <ProductDetails item={productItem} />
      </div>
    </Layout>
  );
}

export default Item;
