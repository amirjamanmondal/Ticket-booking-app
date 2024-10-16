const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
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
    totalTheater: {
        type: Number,
        default: 0,
        required: true,
    }
  },
  { timestamps: true }
);

const Admin = mongoose.model("admin", adminSchema);
module.exports = Admin;
