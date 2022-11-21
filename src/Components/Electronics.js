import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Product from "./Product";
import { fetchproductList } from "../redux/actions/productListActions";

const ProductList = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.productList);

  const { isLoading, productData } = list;

  useEffect(() => {
    dispatch(fetchproductList());
  }, []);

  return (
    <div className="d-flex justify-content-around flex-md-wrap">
      {isLoading ? (
        <h2>Loading......</h2>
      ) : (
        productData
          ?.filter((item) => item.category == "electronics")
          .map((item, i) => {
            return <Product {...item} key={i} />;
          })
      )}
    </div>
  );
};

export default ProductList;
