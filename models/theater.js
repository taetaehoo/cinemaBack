const mongoose = require("mongoose");
const { Schema } = mongoose;
const TheaterSchema = new Schema(
 {
  theater_name: { type: String, required: true },
  hall: { type: String, required: true },
  floor: { type: String, required: true },
  total_seat: { type: String, required: true },
 },
 { timestamps: true }
);
const Theater = mongoose.model("Theater", TheaterSchema);
module.exports = { Theater };