import TweenOne from "rc-tween-one";
import React, { useContext, useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-scroll";
import { Button, Icon, Modal } from "semantic-ui-react";
import { MobileContext } from "../common/MobileProvider";
import frinxmachine from "../images/frinxmachine.png";
import ParticlesOverlay from "../utils/Particles";

function Banner(props) {
  const [openVideo, setOpenVideo] = useState(false);
  const { isMobile } = useContext(MobileContext);

  const videoModal = () => (
    <Modal
      open={openVideo}
      onClose={() => setOpenVideo(false)}
      basic
      size="small"
    >
      <Modal.Content>
        <ReactPlayer url="https://youtu.be/TB4NexR5gvQ" playing controls />
      </Modal.Content>
    </Modal>
  );

  const animType = {
    one: {
      y: "+=30",
      opacity: 0,
      type: "from",
      ease: "easeOutQuad",
    },
  };

  return (
    <div className="banner">
      {videoModal()}
      <div className="home-page banner-page">
        <TweenOne
          animation={animType.one}
          key="text"
          className="banner-title-wrapper"
        >
          <>
            <div
              className="banner-release"
              onClick={() =>
                window.open(
                  "https://github.com/FRINXio/FRINX-machine/releases",
                  "_blank"
                )
              }
            >
              <Icon name="dot circle outline" /> <b>FRINX-Machine v1.1</b> is
              now released! Show on GitHub >
            </div>
            <h1 className="banner-title">
              Automate networks faster with FRINX
            </h1>
            <div className="banner-explain">
              Workflow, Inventory and Network Control for Heterogeneous Networks
            </div>
            <div className="banner-content">
              With FRINX, the network becomes code under version control,
              including snapshots, commits and rollback.
            </div>
            <Link
              to="frinxMachine-wrapper"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Button className="banner-button" size="big" circular>
                Get Started
              </Button>
            </Link>
            <Button
              inverted
              size="big"
              circular
              onClick={() => setOpenVideo(true)}
            >
              <Icon name="play" />
              Watch video
            </Button>
          </>
        </TweenOne>
        <TweenOne animation={animType.one} key="title" className="banner-image">
          <img src={frinxmachine} width="100%" alt="img" />
        </TweenOne>
        {!isMobile && <ParticlesOverlay />}
      </div>
    </div>
  );
}

export default Banner;
