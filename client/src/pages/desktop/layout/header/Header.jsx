import { Link } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <Navigation />
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