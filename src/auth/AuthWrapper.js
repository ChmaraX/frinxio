import React from "react";

function AuthWrapper(props) {
  return (
    <div className="auth-wrapper">
      {props.children}
      <div className="auth-bg" />
    </div>
  );
}

export default AuthWrapper;
