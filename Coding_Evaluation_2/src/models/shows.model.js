const mongoose = require("mongoose");

const showsSchema = new mongoose.Schema(
  {
    timing: { type: Number, required: true },
    movie : { type: String, required: true },
    total_seats: { type: Number, required: true },
    screen  : { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("shows", showsSchema);