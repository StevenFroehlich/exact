import React from "react";

import "./areaContact.scss";

function AreaContact() {
  return (
    <>
      <div className="areaContact" id="areaContact">
        <div className="wrapperArea">
          <div className="wrapperHeading">
            <h2>CONTACT US</h2>
            <p>
              Please feel free to reach out to us anytime with your question or
              a product demo request.
            </p>
          </div>
          <div className="wrapperForm">
            <h3>Message</h3>
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
              <div className="wrapperCheckbox">
                <input type="checkbox" id="privacy" />
                <label for="privacy" className="term">
                  I agree that my data may be used to process this request (
                  <a href="#area01">see privacy policy</a>)
                </label>
              </div>
              <div className="wrapperCheckbox">
                <input type="checkbox" id="information" />
                <label for="information" className="term">
                I would like to be informed about news from exact 
                </label>
              </div>
              <button type="submit">SEND</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AreaContact;
