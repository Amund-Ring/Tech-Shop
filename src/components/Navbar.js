import { navigate } from "gatsby-link";
import React from "react";
import * as styles from "../styles/Navbar.module.css";

function Navbar() {
  const handleClick = () => {
    navigate("/products");
  };

  return (
    <nav className={styles.navbar}>
      <h1 onClick={handleClick}>Tech Shop - testing</h1> {/* eslint-disable-line */}
      <p>Cart(3)</p>
    </nav>
  );
}

export default Navbar;
