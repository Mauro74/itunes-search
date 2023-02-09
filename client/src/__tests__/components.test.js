import * as React from "react";
import * as renderer from "react-test-renderer";
import ProductComponent from "../components/ProductList";
import ProductListing from "../components/ProductSearch";
import Header from "../components/Header";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("components", () => {
  const initialState = {};
  const mockStore = configureStore();
  let store;

  test("ProductComponent should render correctly", () => {
    store = mockStore(initialState);
    const tree = renderer
      .create(
        <Provider store={store}>
          <ProductComponent />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("ProductListing should render correctly", () => {
    store = mockStore(initialState);
    const tree = renderer
      .create(
        <Provider store={store}>
          <ProductListing />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Header should render correctly", () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
