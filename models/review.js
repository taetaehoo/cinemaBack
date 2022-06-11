const { Schema, model, Types } = require("mongoose");
const ReviewSchema = new Schema(
 {
  movie_rate: { type: Number, required: true },
  content: { type: String, required: true },
  movie_rate_date: { type: String, required: true },
  total_recommendation: { type: Number, required: true },
  movie: { type: Types.ObjectId, required: true, ref: "Movie" },
  member: { type: Types.ObjectId, required: true, ref: "Member" },
},
 { timestamp: true } 
);

const Review = model("Review", ReviewSchema); 
module.exports = { Review }; 
