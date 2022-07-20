import { useEffect } from "react";
import { GetAllProducts } from "../../../services/service";
import useProduct from "../../../context/products.context";
import Product from "./product/Product";

import style from './Products.module.css';

const Products = () => {
  const { products, getProducts } = useProduct();

  useEffect(() => {
    GetAllProducts()
      .then(res => {
        if(res.data) getProducts(res.data);

      })
  }, [getProducts])

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