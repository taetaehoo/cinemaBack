const mongoose = require("mongoose");
const { Schema } = mongoose;
const EventSchema = new Schema(
  {
    img: { type: String, required: true },
    title: { type: String, required: true },
    date: { type: String, required: true },
  },
  { timestamps: true }
);
const Event = mongoose.model("Event", EventSchema);
module.exports = { Event };
