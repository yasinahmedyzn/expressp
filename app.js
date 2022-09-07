const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const app = express();
const service = require("./service/render");
app.use("/add-user", service.addUser);
app.use("/", (req, res, next) => {
  res.send("<h1>welcome from giftboom!!</h1>");
  next();
});

dotenv.config({ path: "config.env" });
const Port = process.env.port || 8000;

app.listen(Port, () => {
  console.log(`server running on http://localhost:${Port}`);
});
