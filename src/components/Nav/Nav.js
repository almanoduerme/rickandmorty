import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to={`/character`} className="nav__link">
            Character
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={`/location`} className="nav__link">
            Locations
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to={`/episode`} className="nav__link">
            Episodes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
