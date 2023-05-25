const { model, Schema } = require("mongoose");

const ReviewScheme = new Schema({
  // email: String,
  firstname: String,
  lastname: String,
  profilePic: String,
  title: String,
  comment: String,
  rate: Number,
  reviews: Number,
  companyId: String,
  dateOfExperience: String,
  date: { type: Date, default: Date.now },
  owner: { type: Schema.ObjectId, ref: "Users" },
});

const ReviewModel = model("Reviews", ReviewScheme);

module.exports = ReviewModel;
