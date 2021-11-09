import React from "react";
import ScrollToTop from "../scrollToTop/ScrollToTop";

import "./areaContact.scss";

function AreaContact() {
  return (
    <>
      <div className="areaContact" id="areaContact">
        <form>
          <label htmlFor="name">
            <input type="text" id="name" placeholder="Name" />
            <span>Name</span>
          </label>
          <label htmlFor="email">
            <input type="email" id="email" placeholder="Email" />
            <span>Email</span>
          </label>
          <label htmlFor="concerning">
            <input type="text" id="concerning" placeholder="Concerning" />
            <span>Concerning</span>
          </label>
          <label htmlFor="message">
            <textarea type="text" id="message" placeholder="Message" />
            <span>Message</span>
          </label>

          <button type="button">SEND</button>
        </form>
        <ScrollToTop />
      </div>
    </>
  );
}

export default AreaContact;
