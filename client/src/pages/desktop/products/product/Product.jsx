import {Link} from "react-router-dom";
import style from './Product.module.css';

const Product = (props) => {
  return (
    <div className={style.row}>
      <div className={style.container}>
        <div className={style.image} data-index={props.index} />
        <h3 className={style.title}>{props.product.title}</h3>
        <p className={style.description}>{props.product.description}</p>
      </div>
      <Link to={`/product/${props.product._id}`}>
        <div className={style.footer}>
          <span className={style.shape} />
          Find out more
          <span className={style.arrow} />
        </div>
      </Link>
    </div>
  );
};

export default Product;