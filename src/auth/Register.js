import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Redirect } from "react-router";
import { Button, Checkbox, Form } from "semantic-ui-react";
import fire from "../config/Fire";
import { AuthContext } from "./AuthProvider";
import AuthWrapper from "./AuthWrapper";

const firebase = require("firebase/app");

function Register({ history }) {
  const { currentUser } = useContext(AuthContext);
  const [user, setUser] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    tos: false,
  });

  useEffect(() => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "register-btn",
      {
        size: "invisible",
        callback: () => window.handleRegister(),
      }
    );
    window.recaptchaVerifier.render();

    return (window.handleRegister = undefined);
  }, []);

  window.handleRegister = useCallback(async () => {
    const { email, password, passwordConfirm, tos } = user;

    if (password !== passwordConfirm) {
      alert("Passwords does not match!");
      return window.location.reload();
    }

    if (!tos) {
      alert(
        "You need to agree with our Terms of Service in order to create new account."
      );
      return window.location.reload();
    }

    try {
      await fire.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      alert(error);
      return window.location.reload();
    }

    try {
      await axios.put("/trial-license", { email });
    } catch (error) {
      console.log("License server is unavailable.");
    }
  }, [user]);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  const onUserChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AuthWrapper>
      <div className="home-page form-wrapper register-wrapper">
        <div className="form-title">
          <h1>Sign Up</h1>
        </div>
        <div className="form-box">
          <Form onSubmit={window.handleRegister}>
            <Form.Field>
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => onUserChange(e)}
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="*******"
                onChange={(e) => onUserChange(e)}
              />
            </Form.Field>
            <Form.Field>
              <label>Confirm Password</label>
              <input
                type="password"
                name="passwordConfirm"
                placeholder="*******"
                onChange={(e) => onUserChange(e)}
              />
            </Form.Field>
            <Form.Field>
              <Checkbox
                name="tos"
                checked={user.tos}
                label="Please indicate that you agree to the Terms of Service"
                onChange={() => setUser({ ...user, tos: !user.tos })}
              />
            </Form.Field>
            <Button circular primary fluid type="submit" id="register-btn">
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
