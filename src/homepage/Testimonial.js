import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import TweenOne from "rc-tween-one";
import React, { useContext } from "react";
import { Grid, Icon } from "semantic-ui-react";
import { MobileContext } from "../common/MobileProvider";
import chinatelecomImg from "../images/testimonial/chinatelecom.png";
import infradataImg from "../images/testimonial/infradata.png";
import softbankImg from "../images/testimonial/softbank.png";

const testimonials = [
  {
    text:
      "FRINX is expected to provide code base support for the open source project, which is vendor neutral. After due consideration we concluded that FRINX has the right solutions and expertise to do that.",
    author: "Spokesman @ SoftBank",
    logo: softbankImg,
  },
  {
    text:
      "The conscientiousness and dedication of the FRINX colleagues impressed us deeply and we are looking forward to cooperation opportunities in the future.",
    author:
      "Aijun Wang, Manager of the L3VPN PoC project @ Telecom Beijing Research Institute",
    logo: chinatelecomImg,
  },
  {
    text:
      "The FRINX partnership enriched our automation framework and capabilities. The FRINX solution is vendor agnostic, uses open source components and allows us to integrate it in any environment at the speed of light.",
    author: "Mohamed El Haddouchi, Group CTO @ InfraData",
    logo: infradataImg,
  },
];

function Testimonial() {
  const { isMobile } = useContext(MobileContext);

  return (
    <OverPack className="testimonial" playScale={0.3}>
      <div className="testimonial-title">
        <h2>Testimonial</h2>
        <h1>Trusted by industry leaders</h1>
      </div>
      <Grid>
        <Grid.Row className="home-page" columns={isMobile ? 1 : 3} stretched>
          {testimonials.map((t, i) => {
            return (
              <Grid.Column>
                <TweenOne
                  className="testimonial-card"
                  animation={{
                    y: "+=30",
                    opacity: 0,
                    type: "from",
                    ease: "easeOutQuad",
                    delay: 200 + 50 * i,
                  }}
                >
                  <Icon
                    style={{
                      color: "#2185d0",
                      marginBottom: "20px",
                    }}
                    size="big"
                    name="quote left"
                  />
                  <div className="testimonial-card-content">
                    <p>{t.text}</p>
                    <div classname="testimonial-card-content-author">
                      <b>{t.author}</b>
                    </div>
                  </div>
                  <div className="testimonial-card-company">
                    <img src={t.logo} />
                  </div>
                </TweenOne>
              </Grid.Column>
            );
          })}
        </Grid.Row>
      </Grid>
    </OverPack>
  );
}

export default Testimonial;
