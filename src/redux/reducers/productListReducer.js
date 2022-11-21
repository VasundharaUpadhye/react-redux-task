import {
  GET_PRODUCT_LIST,
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_FAILURE,
} from "../actions/constants";

const initialState = {
  isLoading: false,
  productData: [],
  error: null,
};

export function productListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_LIST: {
      return { ...state, isLoading: true };
    }
    case GET_PRODUCT_LIST_SUCCESS: {
      return { ...state, productData: action.payload, isLoading: false };
    }
    case GET_PRODUCT_LIST_FAILURE: {
      return { ...state, error: action.payload, isLoading: false };
    }
    default:
      return state;
  }
}
