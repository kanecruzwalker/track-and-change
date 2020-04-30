const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema ({
    name: {
        type: String,
        trim: true,
        required: "Name your workout"
    },
    type: {
        type: String,
        required: "Enter category of exercise"
    },
    weight: {
        type: Number,
        required: "Enter a weight"
    },
    sets: {
        type:Number,
        required: "Enter a number of sets"
    },
    reps: {
        type: Number,
        required: "Enter a number of reps"
    },
    duration: {
        type: Number,
        required: "How long did your exercise last"
    },
    distance: {
        type: String,
        required: "How far did you travel"
    }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;