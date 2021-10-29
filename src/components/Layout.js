import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../styles/global.css";

function Layout({ children, amountInCart }) {
  return (
    <div className="layout">
      <Navbar amountInCart={amountInCart} />

      <div className="content">{children}</div>
    </div>
  );
}

export default Layout;
