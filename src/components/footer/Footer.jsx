import React from "react";
import "./Footer.scss";
import logo from "../../assets/img/logo.svg";
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>
      <footer>
        <div className="footer__left">
            <Link>
            <img src={logo} alt="" />
            </Link>
            <div className="footer__list">
            <Link to="/">Home</Link>
        <Link to="/about">About</Link>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
