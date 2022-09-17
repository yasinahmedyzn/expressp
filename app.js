const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./database/connection");
const app = express();

//all file will be json
app.use(express.json());

const service = require("./service/render");
const clientRoute = require("./routes/client");
const adminRoute = require("./routes/admin");
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
//connect mongoose
connectDB();
//api middleware
app.use(bodyParser.urlencoded({ extended: false }));

//Routes
app.use("/fetch-data", service.addUser);
app.use(adminRoute);
app.use(clientRoute);

//server
dotenv.config({ path: "config.env" });
const Port = process.env.port || 8000;

app.listen(Port, () => {
  console.log(`server running on http://localhost:${Port}`);
});
