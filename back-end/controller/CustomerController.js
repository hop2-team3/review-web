const CustomerModel = require("../models/customerModel");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "default_secret";
const bcrypt = require("bcrypt");

exports.signup = async (request, response, next) => {
  try {
    const { firstname, lastname, password, email } = request.body;
    const existingUser = await CustomerModel.findOne({ email: email });
    if (existingUser) {
      return response
        .status(409)
        .json({ message: "burtgeltei hereglegch bna." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await CustomerModel.create({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: hashedPassword,
    });
    const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);
    response.status(201).json({ user: result, token: token });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "ymar neg zuil buruu bna" });
  }
};

exports.login = async (request, response, next) => {
  try {
    const { email, password } = request.body;
    const existingUser = await CustomerModel.findOne({ email: email });
    if (!existingUser) {
      return response.status(401).json({ message: "email buruu bna" });
    }
    const matchPassword = await bcrypt.compare(password, existingUser.password);

    if (!matchPassword) {
      return response.status(402).json({ message: "nuuts ug buruu bna" });
    }
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      SECRET_KEY
    );
    response.status(201).json({ user: existingUser, token: token });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "ymar neg zuil buruu bna." });
  }
};

exports.edit = async (request, response, next) => {
  try {
    const { email } = request.body;
    const existingUser = await CustomerModel.findOneAndUpdate(
      { email: email },
      { ...request.body },
      next()
    );
    if (!existingUser) {
      return response.status(401).json({ message: "email buruu bna" });
    }
    console.log(request.body);
    response.status(201).json({ user: existingUser });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "ymar neg zuil buruu bna." });
  }
};
