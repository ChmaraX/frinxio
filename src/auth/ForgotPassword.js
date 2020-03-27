import React from "react";
import { withRouter } from "react-router";
import { Button, Form } from "semantic-ui-react";
import fire from "../config/Fire";
import AuthWrapper from "./AuthWrapper";

function ForgotPassword({ history }) {
  const resetPass = e => {
    e.preventDefault();
    let auth = fire.auth();
    const { email } = e.target.elements;

    auth
      .sendPasswordResetEmail(email.value)
      .then(function() {
        alert("Email sent");
        history.push("/login");
      })
      .catch(function(error) {
        alert(error);
      });
  };

  return (
    <AuthWrapper>
      <div className="home-page form-wrapper login-wrapper">
        <div className="form-title">
          <h1>Password Reset</h1>
        </div>
        <div className="form-box">
          <Form onSubmit={resetPass}>
            <Form.Field>
              <label>Email</label>
              <input name="email" placeholder="Email" />
            </Form.Field>
            <Button circular primary fluid type="submit">
              Send reset email
            </Button>
            <div className="form-links-login">
              <p>
                <a onClick={() => history.push("/login")}>Back to Sign In</a>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </AuthWrapper>
  );
}

export default withRouter(ForgotPassword);
