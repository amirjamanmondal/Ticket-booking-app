const mongoose = require("mongoose");
const { string } = require("zod");

const theaterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    place: {
      type: String,
      required: true,
      trim: true,
    },
    screen: {
      type: String,
      required: true,
      trim: true,
    },
    availability: {
      type: Boolean,
      required: true,
      default: true,
    },
    services: {
      type: String,
      trim: true,
    },
    theaterId: {
      type: String,
      required: true,
      trim: true,
    },
    verification: {
      type: Boolean,
      default: false,
      required: true,
    },
    status: {
      type: Boolean,
      require: true,
      default: false,
    },
  },
  { timestamps: true }
);

const Theater = mongoose.model("theater", theaterSchema);

module.exports = Theater;
