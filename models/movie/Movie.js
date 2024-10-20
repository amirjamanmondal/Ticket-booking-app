const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    production: {
      type: Array,
      required: true,
    },
    director: {
      type: Array,
      required: true,
    },
    producer: {
      type: Array,
      required: true,
    },
    cast: {
      type: Array,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    release: {
      type: Date,
    },
    ticket: {
      type: Number,
    },
    streaming: {
      type: Array,
      required: true,
    },
    origin: {
      type: String,
      required: true,
    },
    budget: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Movie = mongoose.model("movie", movieSchema);

module.exports = Movie;


