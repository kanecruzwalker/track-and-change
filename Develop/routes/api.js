const router = require("express").Router();

// TODO: import required model/s
const Workout = require("../models/workout.js");



// TODO: and add code to the routes so that the app functions correctly

// Creates a workout using data in the request body.
router.post("/api/workouts", (req, res) => {
  // CODE HERE
  // Workout.create(req)
  // .then(dbWorkout => {
  //   res.json(dbWorkout);
  // })
  // .catch(err => {
  //   res.status(400).json(err);
  // });
});

// Respond with workout for id url parameter. This should
// respond with the updated workout json
router.put("/api/workouts/:id", (req, res) => {
  // CODE HERE
  Workout.update(
    {
      _id: mongojs.ObjectId(req.params.id),
    },
    {
      $set: {
        name: req.body.name,
        type: req.body.type,
        weight: req.body.weight,
        sets: req.body.sets,
        reps: req.body.reps,
        duration: req.body.duration,
        distance: req.body.distance
        
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
  Workout.find({})
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
});

// Delete workout with id matching id in the request body.
router.delete("/api/workouts", (req, res) => {
  // CODE HERE
  Workout.remove({}, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send(response);
    }
  });
});

module.exports = router;
