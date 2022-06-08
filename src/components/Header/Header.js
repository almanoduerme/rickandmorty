import { NavLink } from "react-router-dom";
import Nav from "../Nav/Nav";
import Title from "../Title/Title";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/" className="logo">
        <Title className="title" titleText="Rick and Morty" />
      </NavLink>
      <Nav />
    </header>
  );
};

export default Header;
