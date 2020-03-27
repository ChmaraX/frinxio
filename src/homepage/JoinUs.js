import React from "react";
import { withRouter } from "react-router-dom";

function JoinUs(props) {
  return (
    <div className="joinus-wrapper">
      <div className="pulse-bg" />
      <button
        className="pulse-button"
        onClick={() => props.history.push("/careers")}
      >
        Join Us
      </button>
    </div>
  );
}

export default withRouter(JoinUs);
