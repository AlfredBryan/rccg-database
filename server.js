const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
const path = require("path");
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

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Server listening to port ${port}`);
});
