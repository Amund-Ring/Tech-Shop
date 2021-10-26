import React from "react";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import * as styles from "../styles/products.module.css";

function products() {

  const [productData, setProductData] = useState({});

  return (
    <Layout>
      <div className={styles.products}>
        <ProductCard item={{id: 1}}/>
        <ProductCard item={{id: 2}}/>
        <ProductCard item={{id: 3}}/>
        <ProductCard item={{id: 4}}/>
        <ProductCard item={{id: 5}}/>
        <ProductCard item={{id: 6}}/>
        <ProductCard item={{id: 7}}/>
        <ProductCard item={{id: 8}}/>
        <ProductCard item={{id: 9}}/>
        <ProductCard item={{id: 10}}/>
      </div>
    </Layout>
  );
}

export default products;
