import React from "react";

function ContactUs() {
  return (
    <div className="aboutus-wrapper">
      <div className="aboutus-content-wrapper">
        <div className="aboutus-title">
          <h2>About</h2>
          <h1>Contact Us</h1>
        </div>
        <div className="aboutus-content">
          <div className="content-block">
            <h2>Human Resources/Career</h2>
            <p>Email: career@frinx.io</p>
          </div>
          <div className="content-block">
            <h2>Purchase Frinx Products</h2>
            <p>Email: sales@frinx.io</p>
          </div>
          <div className="content-block">
            <h2>Technical Support</h2>
            <p>Email: support@frinx.io</p>
          </div>
          <div className="content-block">
            <h2>Become a Reseller</h2>
            <p>Email: info@frinx.io</p>
          </div>
          <div className="content-block">
            <h2>Contact Address:</h2>
            <p>
              Frinx s.r.o. Mlynské nivy 4959/48, 821 09 Bratislava, Slovakia
            </p>
          </div>
        </div>
      </div>
      <div className="aboutus-bg" />
    </div>
  );
}

export default ContactUs;
