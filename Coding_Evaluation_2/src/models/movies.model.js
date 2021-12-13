const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    actors: { type: Array, required: true },
    languages: { type: Array, required: true },
    directors : { type: Array, required: true },
    poster_url : [{ type: url, required: true }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("movie", movieSchema);