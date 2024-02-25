const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const { default: Axios } = require("axios");
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
const fetch = (...value) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...value));
const CLIENT_ID = "330b6c67acca4d537d39";
const CLIENT_SECRET = "271b4db388bd198262ca1a501822d46083f9072a";

app.get("/api/getAccessToken_Github/:Code", async (req, res) => {
  const Code = req.params.Code;
  const params =
    "?client_id=" +
    CLIENT_ID +
    "&client_secret=" +
    CLIENT_SECRET +
    "&code=" +
    Code;

  Axios.get("https://github.com/login/oauth/access_token" + params, {
    headers: {
      Accept: "application/json",
    },
  }).then((respone) => {
    return res.status(200).json(respone.data);
  });
});

app.get("/api/GetDataUser", (req, res) => {
  const Token = req.get("Authorization");
  Axios.get("https://api.github.com/user", {
    headers: { Authorization: `Bearer ${Token}`, Accept: "application/json" },
  })
    .then((response) => {
      return res.status(200).json(response.data);
    })
    .catch((err) => console.log(err));
});

app.listen(8080, () => {
  console.log("Server is running in http://localhost:" + 8080);
});
