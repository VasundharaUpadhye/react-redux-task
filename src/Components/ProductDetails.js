import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { eachProductDetails } from "../redux/actions/productDetailsAction";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const details = useSelector((state) => state.product);
  const { isLoading, productDetails } = details;
  const dispatch = useDispatch();

  const { productId } = useParams();

  useEffect(() => {
    dispatch(eachProductDetails(productId));
  }, [productId]);

  return (
    <div>
      <img src={productDetails.image} width="250" height="300" />
      <h1>{productDetails.title}</h1>
      <h3>{productDetails.category}</h3>
      <p>{productDetails.description}</p>
      <h2>$ {productDetails.price}</h2>
    </div>
  );
};

export default ProductDetails;
