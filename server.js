const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
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

// Mail services
const transport = {
  host: "smtp.gmail.com",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD
  }
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api", workersRoute);
app.use("/api", userRoute);

// Mail route
app.post("/mail", (req, res) => {
  const mail = {
    from: req.body.name,
    to: "alfred.chimereze@gmail.com",
    subject: "Mail from Site Contact Form",
    text: req.body.name + "\n" + req.body.email + "\n\n" + req.body.message
  };

  transporter.sendMail(mail, (error, data) => {
    if (error) {
      res.json({
        msg: "failed"
      });
    } else {
      res.json({
        msg: "success"
      });
    }
  });
});

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
