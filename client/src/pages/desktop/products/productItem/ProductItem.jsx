import { useParams } from "react-router-dom";
import { GetProductById } from '../../../../services/service';
import { useEffect } from "react";

const ProductItem = () => {
  const { productId } = useParams();

  useEffect(() => {
    if(productId) {
      GetProductById(productId)
        .then(res => {
          console.log(res.data);
        })
    }
  }, [productId])

  return (
    <div>
      {productId}
    </div>
  );
};

export default ProductItem;