import { navigate } from "gatsby";
import React, { useEffect, useState } from "react";
import * as styles from "../styles/ProductCard.module.css";

function ProductCard({ item }) {
  // const [details, setDetails] = useState({
  //   id: 0,
  //   name: "-",
  //   brand: "-",
  //   available: false,
  // });

  // console.log(details);


  const handleClick = () => {
    console.log("Card clicked.");
    navigate(`/product?id=${item.id}`);
  };

  return (
    <div className={styles.productCard} onClick={handleClick}>
      <img src={`/products/${item.id}.jpg`} alt="Alternative text" />
      <div>
        <h2>Philips hue bulb - Philips</h2>
        <h3>500,-</h3>
      </div>
    </div>
  );
}

export default ProductCard;
