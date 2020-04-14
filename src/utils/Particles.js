import React from "react";
import Particles from "react-particles-js";

function ParticlesOverlay() {
  return (
    <div
      style={{
        zIndex: "0",
        width: "100vw",
        height: "800px",
        position: "absolute",
        top: "0",
        marginRight: "calc(-1 * (((100vw - 16px) - 100%) / 2))",
        marginLeft: "calc(-1 * (((100vw - 16px) - 100%) / 2))",
      }}
    >
      <Particles
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 2,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
    </div>
  );
}

export default ParticlesOverlay;
