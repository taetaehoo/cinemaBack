const { Schema, model, Types } = require("mongoose");
const SeatSchema = new Schema(
 {
  seat_column: { type: String, required: true },
  seat_number: { type: Number, required: true },
  member: { type: Types.ObjectId, required: true, ref: "Member" },
  screen: { type: Types.ObjectId, required: true, ref: "Screen" },
},
 { timestamp: true } 
);

const Seat = model("Seat", SeatSchema); 
module.exports = { Seat }; 
