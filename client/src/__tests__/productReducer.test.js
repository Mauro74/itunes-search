import { ActionTypes } from "../redux/constants/action-types";
import { productReducer } from "../redux/reducers/productReducer";

describe("Product reducer", () => {
  describe("fetching products", () => {
    const prod = [{ name: "test" }];
    it("adds products", () => {
      const action = {
        type: ActionTypes.FETCH_PRODUCTS,
        payload: prod,
      };
      const initialState = undefined;
      const nextState = productReducer(initialState, action);
      expect(nextState).toEqual({ products: prod });
    });
  });

  describe("reset products", () => {
    it("returns empty", () => {
      const action = {
        type: ActionTypes.RESET_PRODUCTS,
      };
      const initialState = undefined;
      const nextState = productReducer(initialState, action);
      expect(nextState).toEqual({});
    });
  });
});
