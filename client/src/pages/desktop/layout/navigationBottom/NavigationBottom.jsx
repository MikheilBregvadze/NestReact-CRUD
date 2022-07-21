import style from './NavigationBottom.module.css';
import { NavLink } from "react-router-dom";

const NavigationBottom = () => {
  return (
    <div className={style.menu}>
      <ul>
        <li className={style.home} />
        <li><NavLink to={'/Product/cruz'}>Home</NavLink></li>
        <li>Shop</li>
      </ul>
      <div className={style.menuRight}>
        <span>Our Electric Bikes</span>
        <span>Accessories</span>
        <span>Apparel</span>
      </div>
    </div>
  );
};

export default NavigationBottom;