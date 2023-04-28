const { model, Schema } = require("mongoose");

const LinkScheme = new Schema({
  firstname: String,
  lastname: String,
  comment: String,
  rate: String,
  reviews: Number,
  date: { type: Date, default: Date.now },
  owner: { type: Schema.ObjectId, ref: "User" },
  owner: { type: Schema.ObjectId, ref: "Company" },
});

const LinkModel = model("Link", LinkScheme);

module.exports = LinkModel;
