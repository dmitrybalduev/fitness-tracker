const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Provide type of exercise"
        },
        name: {
          type: String,
          trim: true,
          required: "Provide exercise name"
        },
        duration: {
          type: Number,
          required: "Provide exercise duration"
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
      }
    ]
  }
);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;