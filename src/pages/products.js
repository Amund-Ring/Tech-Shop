import React from "react";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import productData from "../data/products.json";

function Products() {
  return (
    <Layout>
      <div className='products'>
        {productData.items.map((item, index) => {
          return <ProductCard key={`id_${index}`} item={item}></ProductCard>;
        })}
      </div>
    </Layout>
  );
}

export default Products;
