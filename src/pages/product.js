import React from "react";
import { useQueryParam, NumberParam } from "use-query-params";
import { navigate } from "gatsby";

function Product() {
  const [productId, setProductId] = useQueryParam("id", NumberParam);

  if (typeof productId === "undefined" || isNaN(productId)) {
    navigate("/blog/");
  }

  return (
    <div>
      <h3>Here are the product details</h3>
      <h3>Id: {productId}</h3>
    </div>
  );
}

export default Product;
