import React from "react";
import { Link } from 'react-router-dom';
import "./footer.scss";
import logoWhite from "../../assets/img/logoWhite.svg";

function Footer() {
  return (
    <div className="footer" id="footer">
      <Link to="/privacyPolicy">Privacy Policy</Link>
      <Link to="/impressum">Impressum</Link>
      <img src={logoWhite} alt="exact mobility logo" />
    </div>
  );
}

export default Footer;
