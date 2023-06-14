let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Student Model
let studentSchema = require("../models/Student");

// CREATE Student
router.post("/create-student", (req, res, next) => {
  studentSchema
    .create(req.body)
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.error(err);
      return next(err);
    });
});

// READ Students
router.get("/", (req, res) => {
  studentSchema
    .find()
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.error(err);
      return next(err);
    });
});

// UPDATE student
router
  .route("/update-student/:id")
  // Get Single Student
  .get((req, res) => {
    studentSchema
      .findById(req.params.id)
      .then((data) => {
        console.log(data);
        res.json(data);
      })
      .catch((err) => {
        console.error(err);
        return next(err);
      });
  })

  // Update Student Data
  .put((req, res, next) => {
    studentSchema
      .findByIdAndUpdate(req.params.id, {
        $set: req.body,
      })
      .then((data) => {
        console.log(data);
        res.json(data);
      })
      .catch((err) => {
        console.error(err);
        return next(err);
      });
  });

// Delete Student
router.delete("/delete-student/:id", (req, res, next) => {
  studentSchema
    .findByIdAndRemove(req.params.id)
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      console.error(err);
      return next(err);
    });
});

module.exports = router;
