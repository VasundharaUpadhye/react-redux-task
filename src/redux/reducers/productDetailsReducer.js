import {
  PRODUCT_DETAILS,
  PRODUCT_DETAILS_FAILURE,
  PRODUCT_DETAILS_SUCCESS,
} from "../actions/constants";

const initialState = {
  isLoading: false,
  productDetails: {},
  error: null,
};

export const productDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS: {
      return { ...state, isLoading: true };
    }
    case PRODUCT_DETAILS_SUCCESS: {
      return { ...state, productDetails: action.payload, isLoading: false };
    }
    case PRODUCT_DETAILS_FAILURE: {
      return { ...state, error: action.payload, isLoading: false };
    }
    default:
      return state;
  }
};
