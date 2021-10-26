import React, { } from "react";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import * as styles from "../styles/products.module.css";
import JSONData from "../../content/products.json"



function Products() {
  



  return (
    <Layout>
      <div className={styles.products}>


        {JSONData.items.map((item, index) => {
          return <ProductCard item={item} ></ProductCard>
        })}


        {/* <ProductCard item={testItem} /> */}
      </div>



    </Layout>
  );
}

export default Products;
