const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
require("dotenv").config();

const workersRoute = require("./routes/worker");
const userRoute = require("./routes/user");

const app = express();

const port = process.env.PORT || 4000;

mongoose.connect(
  process.env.DB_URL,
  { useNewUrlParser: true, autoIndex: false },
  () => {
    console.log("Database connected");
  }
);

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api", workersRoute);
app.use("/api", userRoute);

app.listen(port, () => {
  console.log(`Server listening to port ${port}`);
});
