const express = require("express");
const path = require("path");
const admin = require("firebase-admin");
const app = express();
const axios = require("axios");
const crypto = require("crypto");
const bodyParser = require("body-parser");

// Firebase admin
const serviceAccount = require("./frinxio-firebase-adminsdk-3ipqn-9f917338d1.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://frinxio.firebaseio.com",
});

app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/license/:email", async function (req, res) {
  try {
    admin
      .auth()
      .getUserByEmail(req.params.email)
      .then((userRecord) => {
        console.log(userRecord);
        const hashToken = crypto
          .createHash("md5")
          .update(userRecord.metadata.creationTime)
          .digest("hex");
        const hashTokenReceived = crypto
          .createHash("md5")
          .update(req.body.creationTime)
          .digest("hex");

        if (hashToken === hashTokenReceived) {
          axios
            .get(
              `${process.env.LICENSE_SERVER_URL}/customer/` + req.params.email,
              {
                headers: {
                  Authorization: `Basic ${process.env.LICENSE_SERVER_AUTH_TOKEN}`,
                },
              }
            )
            .then((result) => {
              res.status(200).send(result.data);
            });
        }
      });
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
});

app.put("/trial-license/", async function (req, res) {
  try {
    const result = await axios.put(
      `${process.env.LICENSE_SERVER_URL}/obtain-trial-secret/`,
      { email: req.body.email },
      {
        headers: {
          Authorization: `Basic ${process.env.LICENSE_SERVER_AUTH_TOKEN}`,
        },
      }
    );
    res.status(200).send(result.data);
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.NODE_PORT || 3001;

app.listen(port, function () {
  console.log("Server is listening at %s", port);
  if (process.send) {
    process.send("online");
  }
});
