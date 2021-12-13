const mongoose = require("mongoose");

const screensSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    theatres : { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("screen", screensSchema);