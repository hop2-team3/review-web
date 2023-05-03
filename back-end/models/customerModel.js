const { model, Schema } = require("mongoose");

const CustomerScheme = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  date: { type: Date, default: Date.now },
});

const CustomerModel = model("Customers", CustomerScheme);

module.exports = CustomerModel;
