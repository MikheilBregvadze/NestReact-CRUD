import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/product/cruz">CRUZ</Link>
        </li>
        <li>
          <Link to="/product/tracker">TRACKER</Link>
        </li>
        <li>
          <Link to="/product/scrambler">SCRAMBLER</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;