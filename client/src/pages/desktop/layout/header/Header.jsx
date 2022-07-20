import { Link } from "react-router-dom";
import style from './Header.module.css';

const Header = () => {
  return (
    <header>
      <div />
      <Link to="/">
        <div className={style.logo} />
      </Link>
      <div>
        Cart
      </div>
    </header>
  );
};

export default Header;