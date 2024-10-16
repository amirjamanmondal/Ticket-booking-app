const mongoose = require("mongoose");

const producerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    trim: true,
  },
  about: {
    type: String,
    trim: true,
  },
  company: {
    type: String,
    trim: true,
  },
  films: {
    type: Array,
  },
  avatar: {
    type: String,
  },
});

const Producer = mongoose.model("producer", producerSchema);

module.exports = Producer;
