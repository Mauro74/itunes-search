import { ActionTypes } from "../constants/action-types";
import fakestoreapi from "../../api/appleStoreApi";
import type { AppDispatch } from "../store";

export const fetchProducts = (term: string, limit: number) => async (dispatch: AppDispatch) => {
  const response = await fakestoreapi.get(`/search?term=${term}&limit=${limit}`);
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data.results });
};

export const removeProducts = () => {
  return {
    type: ActionTypes.RESET_PRODUCTS,
    payload: {},
  };
};
