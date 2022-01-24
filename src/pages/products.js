import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import { getAmountInCart } from "../data/dataHandler";
import productData from "../data/products.json";

function Products() {
  const [amountInCart, setAmountInCart] = useState(getAmountInCart());

  useEffect(() => {
    setAmountInCart(getAmountInCart());
  }, [])

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
