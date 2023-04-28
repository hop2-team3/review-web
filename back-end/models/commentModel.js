const { model, Schema } = require("mongoose");

const ReviewScheme = new Schema({
  firstname: String,
  lastname: String,
  comment: String,
  rate: String,
  reviews: Number,
  date: { type: Date, default: Date.now },
  owner: { type: Schema.ObjectId, ref: "Users" },
  owner: { type: Schema.ObjectId, ref: "Companies" },
});

const ReviewModel = model("Reviews", ReviewScheme);

module.exports = ReviewModel;
