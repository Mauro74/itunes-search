import { ActionTypes } from "../constants/action-types";

interface ProductState {
  products: [];
}

const initialState = {
  products: [],
} as ProductState;

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.RESET_PRODUCTS:
      return {};
    default:
      return state;
  }
};
