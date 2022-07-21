import { NavLink } from "react-router-dom";
import style from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <ul className={style.list}>
        <li>
          <NavLink to="/product/cruz">CRUZ</NavLink>
        </li>
        <li>
          <NavLink to="/product/tracker">TRACKER</NavLink>
        </li>
        <li>
          <NavLink to="/product/scrambler">SCRAMBLER</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;