import React from "react";
import { Link } from "react-router-dom";

import Footer from "../sections/footer/Footer";

function PrivacyPolicy() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: 500,
          height: 500,
          background: "red",
        }}
      >
        <h1 style={{ margin: 100 }}>PRIVACY POLICY</h1>
        <Link to="/">HOME</Link>
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
