const { model, Schema } = require("mongoose");

const CompantScheme = new Schema({
  companyName: String,
  phoneNumber: Number,
  link: String,
  logo: String,
  email: String,
  password: String,
  rating: Number,
  reviews: Number,
  //   role: {
  //     type: String,
  //     default: "user",
  //     enum: ["user", "admin", "superadmin"],
  //   },
  date: { type: Date, default: Date.now },
});

const CompanyModel = model("Company", CompanyScheme);

module.exports = CompanyModel;
