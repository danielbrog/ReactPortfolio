import React from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header__navigation">
    <HashLink to="/#home" className="header__navigation__link">
      Home
    </HashLink>
    <a
      href="https://github.com/danielbrog"
      className="header__navigation__link"
    >
      GitHub
    </a>
    <Link to="/resume" className="header__navigation__link">
      Resume
    </Link>
    <HashLink to="/#Projects" className="header__navigation__link">
      Projects
    </HashLink>
    <HashLink to="/#Skills" className="header__navigation__link">
      Skills
    </HashLink>
    <HashLink to="/#Courses" className="header__navigation__link">
      Courses
    </HashLink>
  </header>
);

export default Header;
