import {
  PRODUCT_DETAILS,
  PRODUCT_DETAILS_FAILURE,
  PRODUCT_DETAILS_SUCCESS,
} from "./constants";
import axios from "axios";

export const productDetails = () => {
  return {
    type: PRODUCT_DETAILS,
  };
};

export const productDetailsSuccess = (data) => {
  return {
    type: PRODUCT_DETAILS_SUCCESS,
    payload: data,
  };
};

export const productDetailsFailure = (error) => {
  return {
    type: PRODUCT_DETAILS_FAILURE,
    payload: error,
  };
};

export const eachProductDetails = (productId) => {
  return (dispatch) => {
    dispatch(productDetails());

    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => dispatch(productDetailsSuccess(res.data)))
      .catch((err) => dispatch(productDetailsFailure(err)));
  };
};
