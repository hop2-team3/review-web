const { model, Schema } = require("mongoose");

const CompanyScheme = new Schema({
  companyName: String,
  phoneNumber: Number,
  link: String,
  companyLogo: String,
  email: String,
  password: String,
  rating: Number,
  reviews: Number,
  category: String,
  //   role: {
  //     type: String,
  //     default: "user",
  //     enum: ["user", "admin", "superadmin"],
  //   },
  date: { type: Date, default: Date.now },
});

const CompanyModel = model("Companies", CompanyScheme);

module.exports = CompanyModel;
