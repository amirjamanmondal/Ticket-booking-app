const mongoose = require("mongoose");

const producerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  about: {
    type: String,
  },
  company: {
    type: String,
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
