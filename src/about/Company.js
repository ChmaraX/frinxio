import React from "react";
import { Button, Icon } from "semantic-ui-react";

function Company(props) {
  return (
    <div className="aboutus-wrapper">
      <div className="aboutus-content-wrapper">
        <div style={{ textAlign: "right" }}>
          <Button circular icon onClick={() => props.history.push("/")}>
            <Icon name="close" />
          </Button>
        </div>
        <div className="aboutus-title">
          <h2>About</h2>
          <h1>Company</h1>
        </div>
        <div className="aboutus-content">
          <div className="content-block">
            <h2>WHO IS FRINX</h2>
            <p>
              FRINX consists of a team of passionate developers and industry
              professionals who want to change the way networks are developed,
              deployed and operated. Our vision is to deliver real and
              sustainable productivity gain by automating processes required to
              build, operate and grow communication networks. Enterprise and
              service provider customers are choosing FRINX products and
              solutions to automate branch offices, core, edge and access
              networks. FRINX leverages open source projects and delivers
              supported products and solutions that solve intricate network and
              service automation problems. FRINX proudly serves enterprise and
              service provider customers from the Fortune Global 500 list.
            </p>
          </div>
          <div className="content-block">
            <h2>WHY SHOULD I CARE?</h2>
            <p>
              Open source has become the de-facto standard for new networking
              applications. It allows customers to create differentiation by
              liberating them from a reliance on the same networking software
              and features used by their competitors, sourced from a limited
              choice of vendors. Open source allows customers to create unique
              new functionality based on their schedule and direction, not based
              on networking vendors’ roadmaps and strategies. FRINX takes open
              source networking projects and adds the functionality necessary
              for service providers and enterprise customers to deploy it.
              Besides adding new functionality, our expertise and testing setup
              also lets us fast-track implementation of forthcoming open source
              functionality. We throw in quality assurance, release management,
              and support.
            </p>
          </div>
          <div className="content-block">
            <h2>WHAT PROBLEMS CAN FRINX HELP ME SOLVE?</h2>
            <p>
              FRINX offers solutions for network automation and control of
              existing and next generation virtualized network devices. We can
              activate network services (e.g. L2/3VPNs, customer port & service
              activation, overlays, …) and provide a central API to and from
              your network to gather service inventory and optimize resource
              utilization. This is achieved without costly HW or SW upgrades in
              your network. FRINX also offers a solution to dramatically
              accelerate data plane performance in OpenStack for NFV or media
              applications.
            </p>
          </div>
          <div className="content-block">
            <h2>WHO ELSE IS USING OPEN SOURCE FOR NETWORKING?</h2>
            <p>
              Companies like Google and Facebook have been successful with using
              open source for many years. More recently AT&T and China Mobile
              have shifted their focus entirely to open source projects like
              ONAP1) that they have founded together with the Linux foundation.
              Centurylink has published2) info on how they evolve their central
              office architecture with open source. And SoftBank is using open
              source for their network operations system, supported by FRINX3).
            </p>
          </div>
          <div className="content-block">
            <h2>OPEN SOURCE IS COMPLICATED, RIGHT?</h2>
            <p>
              It is our mission to make open source networking software simple
              to consume, deploy and extend with new functions. We have an
              impressive deployment and development track record and would be
              happy to share our experience with you.
            </p>
          </div>
        </div>
      </div>
      <div className="aboutus-bg" />
    </div>
  );
}

export default Company;
