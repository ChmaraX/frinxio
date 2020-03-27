import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import TweenOne from "rc-tween-one";
import React from "react";

function Footer() {
  return (
    <div className="footer-wrapper">
      <OverPack className="home-page footer" playScale={0.05}>
        <TweenOne
          animation={{ y: "+=30", opacity: 0, type: "from" }}
          key="footer"
        >
          <span>
            ©2020 <a href="https://frinx.io">FRINX</a> All Rights Reserved
          </span>
        </TweenOne>
      </OverPack>
    </div>
  );
}

export default Footer;
