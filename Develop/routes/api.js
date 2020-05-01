const router = require("express").Router();

// TODO: import required model/s
const db = require("../models");
// const db = require("../models");

// const mongojs = require("mongojs");
// const db = mongojs("mongojs");


// TODO: and add code to the routes so that the app functions correctly

// Creates a workout using data in the request body.
router.post("/api/workouts", (req, res) => {
  // CODE HERE
  db.Workout.create(req)
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

// Respond with workout for id url parameter. This should
// respond with the updated workout json
router.put("/api/workouts/:id", (req, res) => {
  // CODE HERE
  db.Workout.update(
    {
      _id: (req.params.id),
    },
    {
      $push: {
        exercises: req.body
      },
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

// Respond with json for all the workouts in an array.
router.get("/api/workouts", (req, res) => {
  // CODE HERE
  db.Workout.find({})
  .sort({ date: -1 })
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

// Respond with json array containing the last 7 workouts
router.get("/api/workouts/range", (req, res) => {
  // CODE HERE
  db.Workout.find({}).limit(7)
  .then((dbWorkouts) => {
    res.json(dbWorkouts);
  }).catch((err) => {
    res.json(err);
  });
});

// Delete workout with id matching id in the request body.
router.delete("/api/workouts", (req, res) => {
  // CODE HERE
  db.Workout.remove({}, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send(response);
    }
  });
});

module.exports = router;
