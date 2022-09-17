const express = require("express");
const Router = express.Router();
const mongoose = require("mongoose");
const addSchema = require("../model/schemas");
const addUser = new mongoose.model("addUser", addSchema);

Router.get("/", (req, res, next) => {
  res.json("welcome to the server sites");
  next();
});
//fetch data by id
Router.get("/add-user/:id", async (req, res) => {});
//post data
Router.post("/add-user", async (req, res) => {});
//edit data
Router.put("/add-user/:id", async (req, res) => {});
//delete data
Router.delete("/add-user/:id", async (req, res) => {});

module.exports = Router;
