const { Schema, model, Types } = require("mongoose");
const ScreenSchema = new Schema(
 {
  screen_time: { type: String, required: true },
  screen_date: { type: String, required: true },
  movie: { type: Types.ObjectId, required: true, ref: "Movie" },
  theater: { type: Types.ObjectId, required: true, ref: "Theater" },
},
 { timestamp: true } 
);

const Screen = model("Screen", ScreenSchema); 
module.exports = { Screen }; 
