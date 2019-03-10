const mongoose = require("mongoose");

const NewsSchema = mongoose.Schema(
  {
    Title: String,
    Year: Number,
    imdbID: String,
    Poster: String
  },
 
);

module.exports = mongoose.model("Movie", NewsSchema);