import React from "react";
import renderer from "react-test-renderer";
import ProductCard from "../components/ProductCard";

describe("ProductCard", () => {
  it("renders correctly", () => {
    const item = {
      id: 5,
      name: "Bluetooth speaker",
      brand: "JBL",
      price: "800",
      available: false,
      weight: 0.5,
      options: [
        {
          color: ["black"],
          quantity: 15,
        },
        {
          color: ["white"],
          quantity: 0,
        },
        {
          color: ["red"],
          quantity: 1,
        },
      ],
    };

    const tree = renderer.create(<ProductCard item={item} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
