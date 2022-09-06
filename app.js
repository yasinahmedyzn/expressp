const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const app = express();

app.get("/", (req, res, next) => {
  res.send("<h1>welcome from giftboom!!</h1>");
  next();
});

dotenv.config({ path: "config.env" });
const Port = process.env.port || 8000;

app.listen(Port, () => {
  console.log(`server running on http://localhost:${Port}`);
});
