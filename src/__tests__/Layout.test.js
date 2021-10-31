import React from "react";
import renderer from "react-test-renderer";
import Layout from "../components/Layout";

describe("Layout", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Layout amountInCart={5}>
          <h3>Test content</h3>
        </Layout>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
