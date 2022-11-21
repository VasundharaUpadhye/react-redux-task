import { combineReducers } from "redux";
import { productListReducer } from "./productListReducer";
import { productDetailsReducer } from "./productDetailsReducer";

export const reducer = combineReducers({
  productList: productListReducer,
  product: productDetailsReducer,
});
