import React, { useCallback, useContext } from "react";
import { Redirect, withRouter } from "react-router";
import { Button, Checkbox, Form } from "semantic-ui-react";
import fire from "../config/Fire";
import { AuthContext } from "./AuthProvider";
import AuthWrapper from "./AuthWrapper";

function Login(props) {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await fire
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        props.history.push("/");
      } catch (error) {
        console.log(error);
        alert(error);
      }
    },
    [props.history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <AuthWrapper>
      <div className="home-page form-wrapper login-wrapper">
        <div className="form-title">
          <h1>Sign In</h1>
        </div>
        <div className="form-box">
          <Form onSubmit={handleLogin}>
            <Form.Field>
              <label>Username or Email</label>
              <input name="email" placeholder="Username or Email" />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input name="password" type="password" placeholder="*******" />
            </Form.Field>
            <Form.Field>
              <Checkbox label="Remember me" />
            </Form.Field>
            <Button circular primary fluid type="submit">
              Sign In
            </Button>
            <div className="form-links-login">
              <p>
                Don't have an account?{" "}
                <a onClick={() => props.history.push("/register")}>
                  Register here.
                </a>
              </p>
              <p>
                <a onClick={() => props.history.push("/reset-password")}>
                  Forgot password?
                </a>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </AuthWrapper>
  );
}

export default withRouter(Login);
