const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
require("dotenv").config();

const Worker = require("../Models/worker");


router.get("/workers", (req, res) => {
  Worker.find({}, (err, worker) => {
    if (err) {
      res.status(404).send("workers not found");
      return;
    }
    res.status(200).send(worker);
  });
});

// Adding new worker to database
router.post("/admin/create", (req, res) => {
  Worker.create(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      department: req.body.department,
      phone: req.body.phone
    },
    (err, worker) => {
      if (err) res.status(500).send(err);
      res.status(200).send(worker);
    }
  );
});

// Searching database
router.get("/workers/search", (req, res) => {
  let search = req.query.search;
  Worker.find({ $text: { $search: search } })
    .skip(20)
    .limit(10)
    .exec((err, docs) => {
      if (err) {
        res.status(404).send(err);
        return;
      }
      res.status(200).send(docs);
    });
});

router.get("/name/search", function(req, res) {
  let noMatch = null;
  if (req.query.search) {
    const regex = new RegExp(escapeRegex(req.query.search), "gi");
    Worker.find(
      {
        $or: [{ firstName: regex }, { lastName: regex }, { department: regex }]
      },
      (err, workers) => {
        if (err) {
          res.status(404).send(err);
        }
        if (workers.length < 1) {
          noMatch = "No worker match that query, please try again";
        }
        res.send({ result: workers, noMatch: noMatch });
      }
    ).limit(10);
  } else {
    Worker.find({}, (err, workers) => {
      if (err) res.send(err);
      res.send(workers);
    });
  }
});




function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

module.exports = router;
