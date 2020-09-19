// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React, { useState } from "react";
// import "../styles/styles.scss"
import "./Header.scss";
// import hamburger from "../images/bars-solid.svg"
import logo from "../../images/logo.png";
import logo2 from "../../images/logo2.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className="header">
        <div className="header__links">
          <img src={logo2} alt="" className="header__logo" />
          <div className="header__clickable-links">
            <div className="header__clickable-links--calculator">
              Kalkulator
            </div>
            <div className="header__clickable-links--link">Auta klientów</div>
            <div className="header__clickable-links--link">Kontakt</div>
            <div className="header__clickable-links--link">O nas</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
