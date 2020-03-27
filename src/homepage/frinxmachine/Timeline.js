import QueueAnim from "rc-queue-anim";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import React from "react";
import fmDevices from "../../images/fm/devices.png";
import fmPerspectiveImg from "../../images/fm/fm-perspective.png";
import fmUniconfig from "../../images/fm/uniconfig.png";

const timelineContent = [
  {
    title: "Workflow Orchestration",
    text:
      "FRINX Machine includes workflow orchestration capabilities that allow users to combine multiple tasks into a workflow without writing a single line of code. We package a number of workflows written in Python out of the box and users can create their own customized workflows in their programming language of choice. In addition, we use Elasticsearch and Kibana as our persistence layer for inventory data.",
    img: fmPerspectiveImg
  },
  {
    title: "Network wide transactions",
    text:
      "FRINX UniConfig provides the ability to store intent and operational data from services and devices, it enables to commit intent to the network, syncs from the network so that the latest device state is reflected in the controller, compares intended state and operational state and provides device and network wide transactions.",
    img: fmUniconfig,
    add: <a>> Read about Uniconfig</a>
  },
  {
    title: "Open-source device library",
    text:
      "FRINX UniConfig provides a common network API across physical and virtual devices from different vendors. It leverages an open source device library that offers connectivity to a multitude of networking devices and VNFs.",
    img: fmDevices,
    add: (
      <>
        <a
          href="https://docs.frinx.io/frinx-odl-distribution/supported-devices.html"
          target="_blank"
        >
          > Check our library of supported devices
        </a>
        <br />
        <a href="https://github.com/FRINXio/cli-units" target="_blank">
          > CLI Units on GitHub
        </a>
      </>
    )
  }
];

function Timeline(props) {
  return (
    <div className="home-page-wrapper timeline-wrapper">
      <div className="home-page timeline">
        <div className="timeline">
          {timelineContent.map((block, i) => {
            return (
              <OverPack
                key={i.toString()}
                className="block-wrapper"
                playScale={0.3}
              >
                <QueueAnim
                  className="image-wrapper"
                  key="image"
                  type={props.isMobile ? "right" : "bottom"}
                  leaveReverse
                  delay={props.isMobile ? [100, 0] : 0}
                >
                  <div key="image" className="block-img">
                    <img src={block.img} alt="img" />
                  </div>
                </QueueAnim>
                <QueueAnim
                  key="text"
                  leaveReverse
                  delay={props.isMobile ? [0, 100] : 0}
                  className="text-wrapper"
                >
                  <h2 key="title" className="block-title">
                    <i className="block-icon">
                      <img
                        src="https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg"
                        alt="img"
                      />
                    </i>
                    {block.title}
                  </h2>
                  <div key="p" className="block-content">
                    {block.text}
                    <br />
                    <br />
                    {block?.add}
                  </div>
                </QueueAnim>
              </OverPack>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
