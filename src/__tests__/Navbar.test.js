import React from "react";
import renderer from "react-test-renderer";
import Navbar from "../components/Navbar";

describe("Navbar", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Navbar amountInCart={3} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
