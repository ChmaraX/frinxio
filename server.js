const express = require("express");
const path = require("path");

const app = express();
const axios = require("axios");

app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());

app.get("/license/:email", async function (req, res) {
  try {
    const result = await axios.get(
      `${process.env.LICENSE_SERVER_URL}/customer/` + req.params.email,
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
