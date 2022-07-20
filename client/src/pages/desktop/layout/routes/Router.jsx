import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from "../../products/Products";
import ProductItem from "../../products/productItem/ProductItem";

const Router = () => {
  return (
      <Routes>
        <Route path="/product" element={<Products />} />
        <Route path="/product/:productId" element={<ProductItem />} />
      </Routes>
    )
};

export default Router;