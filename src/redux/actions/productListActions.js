import {
  GET_PRODUCT_LIST,
  GET_PRODUCT_LIST_FAILURE,
  GET_PRODUCT_LIST_SUCCESS,
} from "./constants";
import Axios from "axios";

export const getproductList = () => {
  return {
    type: GET_PRODUCT_LIST,
  };
};

export const getproductListSuccess = (data) => {
  return {
    type: GET_PRODUCT_LIST_SUCCESS,
    payload: data,
  };
};

export const getproductListFailure = (error) => {
  return {
    type: GET_PRODUCT_LIST_FAILURE,
    payload: error,
  };
};

export const fetchproductList = () => {
  return (dispatch) => {
    dispatch(getproductList());
    Axios.get("https://fakestoreapi.com/products")
      .then((res) => dispatch(getproductListSuccess(res.data)))
      .catch((err) => dispatch(getproductListFailure(err)));
  };
};
