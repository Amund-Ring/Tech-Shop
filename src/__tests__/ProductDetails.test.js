import React from "react";
import renderer from "react-test-renderer";
import ProductDetails from "../components/ProductDetails/ProductDetails";

describe("ProductDetails", () => {
  it("renders correctly", () => {
    const item = {
      id: 1,
      name: "Philips hue bulb",
      brand: "Philips",
      price: "500",
      available: true,
      weight: 0.2,
      options: [
        {
          color: "white",
          power: [6.5, 9.5],
          quantity: 3,
        },
        {
          color: "red",
          power: [6.5, 9.5],
          quantity: 7,
        },
      ],
    };

    const tree = renderer
      .create(<ProductDetails item={item} amountInCart={3} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
