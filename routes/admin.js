const express = require("express");

const Router = express.Router();
const getUser = require("../service/render");

Router.get("/add-user", (req, res) => {
  res.send(getUser);
});

module.exports = Router;
