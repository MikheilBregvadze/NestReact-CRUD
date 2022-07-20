import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/cruz">CRUZ</Link>
        </li>
        <li>
          <Link to="/tracker">TRACKER</Link>
        </li>
        <li>
          <Link to="/scrambler">SCRAMBLER</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;