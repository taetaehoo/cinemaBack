const { Schema, model, Types } = require("mongoose");
const RecommendationSchema = new Schema(
 {
  isRecommendation: { type: Boolean, required: true },
  review: { type: Types.ObjectId, required: true, ref: "Review" },
  member: { type: Types.ObjectId, required: true, ref: "Member" },
},
 { timestamp: true } 
);

const Recommendation = model("Recommendation", RecommendationSchema); 
module.exports = { Recommendation }; 
