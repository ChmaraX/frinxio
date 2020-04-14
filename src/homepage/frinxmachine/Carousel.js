import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import TweenOne from "rc-tween-one";
import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import Slider from "react-slick";
import { Button } from "semantic-ui-react";

const imgs = [
  <div>
    <div className="slider-img wf1" />
  </div>,
  <div>
    <div className="slider-img wf1" />
  </div>,
  <div>
    <div className="slider-img wf1" />
  </div>,
  <div>
    <div className="slider-img wf1" />
  </div>,
  <div>
    <div className="slider-img wf1" />
  </div>,
  <div>
    <div className="slider-img wf1" />
  </div>,
];

function Carousel() {
  const [size, setSize] = useState();

  useEffect(() => {
    window.addEventListener("resize", () => resize());
    resize();
  });

  const resize = () => {
    setSize(window.innerWidth < 1590);
  };

  var settings = {
    centerMode: true,
    infinite: true,
    dots: true,
    arrows: false,
    slidesToShow: size ? 1 : 3,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Element name="carousel" className="carousel-wrapper">
      <OverPack playScale={0.3}>
        <TweenOne
          animation={{
            y: "-=30",
            opacity: 0,
            type: "from",
            ease: "easeOutQuad",
            delay: 200,
          }}
        >
          <div className="carousel-content">
            <h1>Create complex workflows in no time</h1>
            <h2>using FRINX Machine's Workflow Builder</h2>
            <Button
              primary
              onClick={() => window.open("https://demo.frinx.io/", "_blank")}
            >
              Try online demo
            </Button>
          </div>
          <div className="slider">
            <div className="slider-frame" />
            <Slider {...settings}>{imgs}</Slider>
          </div>
        </TweenOne>
      </OverPack>
    </Element>
  );
}

export default Carousel;
