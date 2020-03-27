import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import TweenOne from "rc-tween-one";
import React from "react";
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
  </div>
];

function Carousel() {
  var settings = {
    centerMode: true,
    infinite: true,
    dots: true,
    arrows: false,
    slidesToShow: 3,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 3000
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
            delay: 200
          }}
        >
          <div className="carousel-content">
            <h1>Create complex workflows in no time</h1>
            <h2>using FRINX Machine's Workflow Builder</h2>
            <Button primary>Request free demo</Button>
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
