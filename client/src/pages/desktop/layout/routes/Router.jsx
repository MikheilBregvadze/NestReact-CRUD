import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from "../../products/Products";
import ProductItem from "../../products/productItem/ProductItem";

const Router = () => {
  return (
      <Routes>
        <Route path="/cruz" element={<Products />} />
        <Route path="/tracker" element={<Products />} />
        <Route path="/scrambler" element={<Products />} />
        <Route path="/product/:productId" element={<ProductItem />} />
      </Routes>
    )
};

export default Router;