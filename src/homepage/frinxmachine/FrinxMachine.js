import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import TweenOne from "rc-tween-one";
import React, { useContext } from "react";
import { Button, Grid, Image } from "semantic-ui-react";
import { MobileContext } from "../../common/MobileProvider";
import fmStacked from "../../images/fm/fm-stacked.png";
import ansibleImg from "../../images/icons/ansible.png";
import conductorImg from "../../images/icons/conductor.png";
import dynomiteImg from "../../images/icons/dynomite.png";
import elasticImg from "../../images/icons/elastic.png";
import frinxImg from "../../images/icons/frinx.png";
import pythonImg from "../../images/icons/python.png";
import redisImg from "../../images/icons/redis.png";
import terraformImg from "../../images/icons/terraform.png";

const imageTiles = [
  {
    name: "Redis",
    img: redisImg,
    margin: 80,
  },
  {
    name: "Python",
    img: pythonImg,
    margin: 20,
  },
  {
    name: "Elastic",
    img: elasticImg,
    margin: -40,
  },
  {
    name: "Conductor",
    img: conductorImg,
    margin: 20,
  },
  {
    name: "Ansible",
    img: ansibleImg,
    margin: -40,
  },
  {
    name: "Terraform",
    img: terraformImg,
    margin: -100,
  },
  {
    name: "Frinx",
    img: frinxImg,
    margin: -40,
  },
  {
    name: "Dynomite",
    img: dynomiteImg,
    margin: -40,
  },
];

const defAnimation = {
  y: "-=30",
  opacity: 0,
  type: "from",
  ease: "easeOutQuad",
  delay: 200,
};

function FrinxMachine() {
  const { isMobile } = useContext(MobileContext);

  return (
    <div className="frinxMachine-wrapper">
      <OverPack playScale={0.3}>
        <div className="frinxMachine-page">
          <TweenOne animation={defAnimation} className="frinxMachine-title">
            <h2>Networking made easy</h2>
            <h1>FRINX Machine</h1>
          </TweenOne>

          <Grid>
            <Grid.Row columns={isMobile ? 1 : 2}>
              <Grid.Column>
                <TweenOne
                  animation={{
                    x: "-=30",
                    opacity: 0,
                    type: "from",
                    ease: "easeOutQuad",
                    delay: 200,
                  }}
                >
                  <div className="frinxMachine-image">
                    <img src={fmStacked} />
                  </div>
                </TweenOne>
              </Grid.Column>
              <Grid.Column>
                <TweenOne
                  animation={defAnimation}
                  className="frinxMachine-content"
                >
                  <div className="frinxMachine-content-block">
                    <h3>Manage large networks</h3>
                    <p>
                      FRINX Machine is based on open source components and
                      enables infrastructure engineers to manage intent,
                      implement changes and obtain operational data from their
                      heterogenous networks and clouds. FRINX Machine uses
                      Netflix’s Conductor for workflows and micro service
                      orchestration and UniConfig for network control.
                    </p>
                  </div>
                  <div className="frinxMachine-content-block">
                    <h3>Create and execute workflows</h3>
                    <p>
                      Also, FRINX Machine includes workflow orchestration
                      capabilities that allow users to combine multiple tasks
                      into workflows with a visual workflow builder. We provide
                      a selection of micro services in Python out of the box and
                      users can create their own services in their programming
                      language of choice. We provide interfaces for many
                      persistence solutions out of the box.
                    </p>
                    <br />
                    <Button
                      color="blue"
                      onClick={() =>
                        window.open(
                          "https://docs.frinx.io/frinx-machine/getting-started/getting-started-with-frinx-machine.html",
                          "_blank"
                        )
                      }
                    >
                      Check Full Documentation
                    </Button>
                    <br />
                    <div className="image-tiles">
                      {imageTiles.map((tile, i) => {
                        return (
                          <TweenOne
                            animation={{
                              x: "-=30",
                              opacity: 0,
                              type: "from",
                              ease: "easeOutQuad",
                              delay: 200 + 100 * i,
                            }}
                            style={{
                              width: "50px",
                              height: "50px",
                              display: "inline-block",
                              marginRight: "15px",
                              backgroundColor: "white",
                              padding: "10px",
                              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
                              marginTop: "20px",
                              borderRadius: "100%",
                            }}
                          >
                            <Image src={tile.img} circular />
                          </TweenOne>
                        );
                      })}
                    </div>
                  </div>
                </TweenOne>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </OverPack>
    </div>
  );
}

export default FrinxMachine;
