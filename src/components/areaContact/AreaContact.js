import React, { useState } from "react";
import ScrollToTop from "../scrollToTop/ScrollToTop";

import "./areaContact.scss";

function AreaContact() {
  return (
    <>
      <div className="areaContact" id="areaContact">
        <div className="wrapperArea">
          <div className="wrapperHeading">
            <h2>CONTACT US</h2>
            <p>We take time for your questions.</p>
            <p>And are happy to show you a product demo.</p>
          </div>
          <div className="wrapperForm">
            <form
              action="https://formsubmit.co/info@downsiteup.de"
              method="POST"
            >
              <label htmlFor="name">
                <input type="text" id="name" placeholder="Name" />
                <span>Name</span>
              </label>
              <label htmlFor="email">
                <input type="email" id="email" placeholder="Email" />
                <span>Email</span>
              </label>
              <label htmlFor="subject">
                <input type="text" id="subject" placeholder="Subject" />
                <span>Subject</span>
              </label>
              <label htmlFor="message">
                <textarea
                  type="text"
                  id="message"
                  placeholder="Message"
                  row="50"
                  columns="50"
                />
                <span>Message</span>
              </label>
              <input type="checkbox" />
              <p>Agree</p>
              <button type="submit">SEND</button>
            </form>
            <ScrollToTop />
          </div>
        </div>
      </div>
    </>
  );
}

export default AreaContact;
