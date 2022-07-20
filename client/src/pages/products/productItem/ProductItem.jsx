import style from './ProductItem.module.css';

const ProductItem = (props) => {
  return (
    <div className={style.row}>
      <div className={style.container}>
        <div className={style.image} data-index={props.index} />
        <h3>{props.product.title}</h3>
        <p>{props.product.description}</p>
        <button ></button>
      </div>
    </div>
  );
};

export default ProductItem;