import React from "react";
import { navigate } from "gatsby-link";

function Home() {
  if (typeof window !== "undefined") {
    navigate("/products");
  }
  
  return <div>Redirecting to our products page</div>;
}

export default Home;
