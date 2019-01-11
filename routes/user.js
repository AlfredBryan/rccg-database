const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const bcrypt = require("bcrypt");
require("dotenv").config();

const User = require("../Models/User");

router.post("/user/create", (req, res) => {
  const hashPassword = bcrypt.hashSync(req.body.password, 10);
  User.create(
    {
      username: req.body.username,
      password: hashPassword
    },
    (err, user) => {
      if (err) return res.status(409).send(err);
      console.log(user);
      //create token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: 1440
      });
      res.status(201).send({ token: token });
    }
  );
});

router.post("/admin/login", (req, res) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) return res.status(500).send({ message: "login error" });
    if (!user) return res.status(404).send({ message: "user not found" });

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!passwordIsValid)
      return res.status(403).send({ message: "login invalid" });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.json({
      user: user,
      message: "Authenticated",
      token: token
    });
    console.log(token);
  });
});

module.exports = router;
