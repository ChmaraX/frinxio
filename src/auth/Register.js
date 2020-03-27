import axios from "axios";
import React, { useCallback, useContext } from "react";
import { Redirect } from "react-router";
import { Button, Checkbox, Form } from "semantic-ui-react";
import fire from "../config/Fire";
import { AuthContext } from "./AuthProvider";
import AuthWrapper from "./AuthWrapper";

function Register({ history }) {
  const { currentUser } = useContext(AuthContext);

  const handleRegister = useCallback(
    async event => {
      event.preventDefault();
      const { email, password, passwordConfirm, tos } = event.target.elements;

      if (password.value !== passwordConfirm.value) {
        return alert("Passwords does not match!");
      }

      if (!tos.checked) {
        return alert(
          "You need to agree with our Terms of Service in order to create new account."
        );
      }

      try {
        await fire
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);

        await axios.put("/trial-license", { email: email.value });
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <AuthWrapper>
      <div className="home-page form-wrapper register-wrapper">
        <div className="form-title">
          <h1>Sign Up</h1>
        </div>
        <div className="form-box">
          <Form onSubmit={handleRegister}>
            <Form.Field>
              <label>Email</label>
              <input type="email" name="email" placeholder="Email" />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input type="password" name="password" placeholder="*******" />
            </Form.Field>
            <Form.Field>
              <label>Confirm Password</label>
              <input
                type="password"
                name="passwordConfirm"
                placeholder="*******"
              />
            </Form.Field>
            <Form.Field>
              <Checkbox
                name="tos"
                label="Please indicate that you agree to the Terms of Service"
              />
            </Form.Field>
            <Button circular primary fluid type="submit">
              Sign Up
            </Button>
            <div className="form-links">
              <p>
                Please see our <a href="/privacy-policy">Privacy Policy</a> page
                for more information on our terms of service and data usage.
              </p>
              <p>
                After registering, please check your email and click the
                activation link.
              </p>
              <p>
                <a onClick={() => history.push("/login")}>Switch to Sign In.</a>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </AuthWrapper>
  );
}

export default Register;
