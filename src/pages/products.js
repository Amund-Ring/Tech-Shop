import React, { useState } from "react";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import productData from "../data/products.json";
import { getAmountInCart } from "../data/dataHandler";

function Products() {
  const [amountInCart] = useState(getAmountInCart());

  return (
    <Layout amountInCart={amountInCart}>
      <div className="products">
        {productData.items.map((item, index) => {
          return <ProductCard key={`id_${index}`} item={item}></ProductCard>;
        })}
      </div>
    </Layout>
  );
}

export default Products;
