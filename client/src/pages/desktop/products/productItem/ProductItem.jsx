import style from './ProductItem.module.css';

const ProductItem = (props) => {
  return (
    <div className={style.row}>
      <div className={style.container}>
        <div className={style.image} data-index={props.index} />
        <h3 className={style.title}>{props.product.title}</h3>
        <p className={style.description}>{props.product.description}</p>
      </div>
      <div className={style.footer}>
        <span className={style.shape} />
        Find out more
        <span className={style.arrow} />
      </div>
    </div>
  );
};

export default ProductItem;