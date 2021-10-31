import React from "react";
import renderer from "react-test-renderer";
import CheckoutList from "../components/CheckoutList/CheckoutList";

describe("CheckoutList", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<CheckoutList amountInCart={6} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
