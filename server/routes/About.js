const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.send({ home: "About Route" });
});

module.exports = route;
