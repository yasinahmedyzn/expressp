const express = require("express");
const route = express.Router();

const service = require("../service/render");
route.get("/", service.addUser);

module.exports = route;
