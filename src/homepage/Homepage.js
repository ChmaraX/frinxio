import React from "react";
import Footer from "../common/Footer";
import About from "../homepage/About";
import Banner from "../homepage/Banner";
import Blog from "../homepage/Blog";
import Carousel from "../homepage/frinxmachine/Carousel";
import FrinxMachine from "../homepage/frinxmachine/FrinxMachine";
import Timeline from "../homepage/frinxmachine/Timeline";
import JoinUs from "../homepage/JoinUs";
import Testimonial from "../homepage/Testimonial";

function Homepage(props) {
  return [
    <Banner isMobile={props.isMobile} />,
    <About />,
    <JoinUs />,
    <FrinxMachine />,
    <Timeline isMobile={props.isMobile} />,
    <Carousel />,
    <Testimonial />,
    <Blog />,
    <Footer />
  ];
}

export default Homepage;
