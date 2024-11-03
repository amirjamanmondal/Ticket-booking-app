const mongoose = require("mongoose");
const { string } = require("zod");

const roomSchema = new mongoose.Schema(
  {
    seatNo: {
      type: Number,
      required: true,
      trim: true,
    },
    placement: {
      type: string,
      require: true,
      trim: true,
    },
    booked: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);


const Room= mongoose.model('room', roomSchema);
module.exports= Room;