const mongoose = require("mongoose");
const { Schema } = mongoose;
const MovieSchema = new Schema(
 {
  movie_name: { type: String, required: true },
  reservation_rate: { type: String, required: true },
  director: { type: String, required: true },
  actor: { type: String, required: true },
  genre: { type: String, required: true },
  screen_grade: { type: Number, required: true },
  release_date: { type: String, required: true },
  run_time: { type: String, required: true },
  movie_img: { type: String, required: true },
  egg: { type: String, required: true },
 },
 { timestamps: true }
);
const Movie = mongoose.model("Movie", MovieSchema);
module.exports = { Movie };
