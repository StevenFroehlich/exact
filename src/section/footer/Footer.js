import React from "react";
import "./footer.scss";
import logoWhite from "../../assets/img/logoWhite.svg";

function Footer() {
  return (
    <div className="footer" id="footer">
      <a href="/">Privacy Policy</a>
      <a href="/">Impressum</a>
      <img src={logoWhite} alt="exact mobility logo" />
    </div>
  );
}

export default Footer;
