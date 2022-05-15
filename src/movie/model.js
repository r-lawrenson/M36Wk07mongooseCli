const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  actor: {
    type: String,
    default: "Not specified",
  },
  year: {
    type: String,
    length: 4,
  }
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;