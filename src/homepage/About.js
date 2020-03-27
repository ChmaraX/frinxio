import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import TweenOne from "rc-tween-one";
import React from "react";
import { Grid } from "semantic-ui-react";
import about1 from "../images/about/about1.svg";
import about2 from "../images/about/about2.svg";
import about3 from "../images/about/about3.svg";
import about4 from "../images/about/about4.svg";

const aboutContent = [
  {
    title: "What is FRINX?",
    text:
      "We automate processes in networks and clouds and help you to focus on your business. We build our solutions on open source technology and help your engineers to get the work done with the tools they love.",
    icon: about1
  },
  {
    title: "Automate the Network",
    text:
      "Every time you need to change your infrastructure and services, FRINX captures your intent. With FRINX, the network becomes code under version control, including snapshots, commits and rollback.",
    icon: about2
  },
  {
    title: "Workflow, Inventory & Network Control",
    text:
      "Create your own workflows or use the ones that ship with FRINX Machine. FRINX keeps track of network changes and makes your physical and logical assets available via REST APIs and our Go, Java and Python client libraries.",
    icon: about3
  },
  {
    title: "Validated by the world's largest networks",
    text:
      "The largest networks and enterprises in the world rely on open source technologies for network control and workflow. FRINX is proud to be working with industry leaders on their automation and provisioning systems.",
    icon: about4
  }
];

function About() {
  return (
    <div className="home-page about-wrapper">
      <div className="about-title">
        <h2>Meet FRINX</h2>
        <h1>Network automation that just works</h1>
      </div>
      <OverPack playScale={0.3}>
        <Grid>
          <Grid.Row columns={2}>
            {aboutContent.map((about, i) => (
              <Grid.Column computer={8} mobile={16}>
                <TweenOne
                  animation={{
                    y: "+=30",
                    opacity: 0,
                    type: "from",
                    ease: "easeOutQuad",
                    delay: 200 + 100 * i
                  }}
                >
                  <div className="about-block">
                    <img className="about-block-icon" src={about.icon} />

                    <div className="about-block-content">
                      <div className="about-block-content-title">
                        <h3>{about.title}</h3>
                      </div>
                      <p>{about.text}</p>
                    </div>
                  </div>
                </TweenOne>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
        <div className="about-joinus">
          <h2>Join our team today!</h2>
        </div>
      </OverPack>
    </div>
  );
}

export default About;
