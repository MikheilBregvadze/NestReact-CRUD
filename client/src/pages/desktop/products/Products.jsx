import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GetProductsByCategory } from "../../../services/service";
import useProduct from "../../../context/products.context";
import Product from "./product/Product";

import style from './Products.module.css';

const Products = () => {
  const { pathname } = useLocation();
  const { products, getProducts } = useProduct();
  console.log(pathname.replace('/product/', ''));
  useEffect(() => {
    GetProductsByCategory(pathname.replace('/product/', ''))
      .then(res => {
        if(res.data) getProducts(res.data);
      })
  }, [getProducts, pathname])

  return (
    <div className={style.row}>
      {products &&
        products.map((product, index) =>
          <Product
            index={index + 1}
            key={product._id}
            product={product}
          />
        )
      }
    </div>
  );
};

export default Products;