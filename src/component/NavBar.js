import "./NavBar.css";
import Logo from "../utils/quots-logo.png";
import { Link } from "react-router-dom";

const NavBar = ({ isLoggedIn }) => {
  return (
    <>
      <div className="navbar-image-container">
        <img
          src={Logo}
          width="100%"
          height="100%"
          alt="Logo Image Loading."
          loading="lazy"
        />
      </div>

      {isLoggedIn ? (
        <ul className="navbar-navitems-container">
          <li>
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/profile" className="navbar-link">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/create" className="navbar-link">
              Create
            </Link>
          </li>
          <li>
            <Link to="/logout" className="navbar-link">
              Logout
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="navbar-navitems-container sign-container">
          <li>
            <Link to="/sign" className="navbar-link">
              Sign-in / Sign-up
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default NavBar;
