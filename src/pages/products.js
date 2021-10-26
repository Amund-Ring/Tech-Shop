import React from "react";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import * as styles from "../styles/products.module.css";

function products() {
  return (
    <Layout>
      <div className={styles.products}>
        <ProductCard id={1}/>
        <ProductCard id={2}/>
        <ProductCard id={3}/>
        <ProductCard id={4}/>
        <ProductCard id={5}/>
      </div>
    </Layout>
  );
}

export default products;
