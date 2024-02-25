const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser);
console.log("hello");
app.listen(8080, () => {
  console.log("Server is running in http://localhost:" + 8080);
});
