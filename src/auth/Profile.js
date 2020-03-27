import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { withRouter } from "react-router";
import { Form, Grid, Input, Radio } from "semantic-ui-react";
import fire from "../config/Fire";
import { AuthContext } from "./AuthProvider";

function Profile({ history }) {
  const [isSubscribe, setSubscribe] = useState(true);
  const [email, setEmail] = useState();
  const { currentUser } = useContext(AuthContext);
  const [license, setLicense] = useState();

  useEffect(() => {
    const email = currentUser.email;
    console.log("sss");
    axios.get("/license/" + email).then(res => {
      console.log(res.data);
      setLicense(res.data);
    });
  }, []);

  return (
    <div className="auth-wrapper">
      <div className="home-page profile-wrapper">
        <div className="profile-title">
          <h1>User Account</h1>
          <h2>{currentUser?.email}</h2>
        </div>
        <div className="profile-content">
          <div className="license-info">
            <div className="token">
              <h2>My secret token</h2>
              <pre>{license?.licenses[0].token}</pre>
            </div>
            <h2>My license information</h2>
            <div className="info">
              <Grid>
                <Grid.Row columns={2}>
                  <Grid.Column className="info-type">
                    <p>
                      License Type: <span>{license?.licenseType.name}</span>
                    </p>
                    <p>
                      Licenses of registered devices:{" "}
                      <span>{license?.licenses.length}</span>
                    </p>
                    <p>
                      Number of Licenses left:{" "}
                      <span>99 out of {license?.licenseType.maxCount}</span>
                    </p>
                  </Grid.Column>
                  <Grid.Column className="info-type">
                    <p>
                      Created Date: <span>{license?.licenses[0].created}</span>
                    </p>
                    <p>
                      Expiry Date:{" "}
                      <span>{license?.licenses[0].expiryDate}</span>
                    </p>
                    <p>
                      Hostname:{" "}
                      <span>{license?.licenses[0]?.fingerprint.hostname}</span>
                    </p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          </div>
          <div className="subscribe">
            <h2>Newsletter</h2>
            <p>
              Occasionally we'd like to send you our newsletter. Please indicate
              below whether this is okay. You can change your mind at any time
              by clicking the unsubscribe link in the footer of any email or
              here, thank you.
            </p>
            <Form style={{ width: "50%" }}>
              <Form.Field>
                <Input
                  icon="mail"
                  iconPosition="left"
                  placeholder="Enter your email address"
                  action="Submit"
                  onChange={e => setEmail(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <Radio
                  label="Subscribe"
                  onChange={() => setSubscribe(true)}
                  name="radioGroup"
                  value="sub"
                  checked={isSubscribe}
                />
              </Form.Field>
              <Form.Field>
                <Radio
                  label="Unsubscribe"
                  onChange={() => setSubscribe(false)}
                  name="radioGroup"
                  value="unsub"
                  checked={!isSubscribe}
                />
              </Form.Field>
            </Form>
          </div>
          <div className="settings">
            <p>
              <a onClick={() => history.push("/reset-password")}>
                > Reset password
              </a>
            </p>
            <p>
              <a onClick={() => fire.auth().signOut()}>> Logout</a>
            </p>
          </div>
        </div>
      </div>
      <div className="auth-bg" />
    </div>
  );
}

export default withRouter(Profile);
