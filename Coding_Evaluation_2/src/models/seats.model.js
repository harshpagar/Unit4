const mongoose = require("mongoose");

const seatsSchema = new mongoose.Schema(
  {
    show : { type: Number, required: true },
   
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("seats ", seatsSchema);