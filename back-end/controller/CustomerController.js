const CustomerModel = require("../models/customerModel");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "default_secret";
const bcrypt = require("bcrypt");

exports.getUsers = async (req, res) => {
  try {
    const users = await CustomerModel.find();
    return res.status(200).json({
      message: true,
      data: users,
    });
  } catch (error) {
    return res.status(400), json({ message: error, data: null });
  }
};

exports.signup = async (req, res, next) => {
  try {
    const { firstname, lastname, password, email } = req.body;
    const existingUser = await CustomerModel.findOne({ email: email });
    if (existingUser) {
      return res.status(409).json({ message: "You have already signed up." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await CustomerModel.create({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: hashedPassword,
    });
    const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);
    res.status(201).json({ user: result, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something's not going well." });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const existingUser = await CustomerModel.findOne({ email: email });
    if (!existingUser) {
      return res.status(401).json({ message: "Check your email address." });
    }
    const matchPassword = await bcrypt.compare(password, existingUser.password);

    if (!matchPassword) {
      return res.status(402).json({ message: "Check your password." });
    }
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      SECRET_KEY
    );
    res.status(201).json({ user: existingUser, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something's not going well." });
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const { email } = req.body;
    const existingUser = await CustomerModel.findOneAndUpdate(
      { email: email },
      { ...req.body }
    );
    if (!existingUser) {
      return res.status(401).json({ message: "Check your email address." });
    }
    console.log(req.body);
    res.status(201).json({ data: existingUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something's not going well." });
  }
};

exports.deleteUsers = async (req, res, next) => {
  try {
    const users = await CustomerModel.deleteMany({});
    res.status(200).json({
      message: "all users deleted",
      data: "deleted",
    });
  } catch (error) {
    return res.status(400).json({ message: error, data: null });
  }
};

// exports.edit = async (req, res, next) => {
//   try {
//     const { email } = req.body;
//     const existingUser = await CustomerModel.findOneAndUpdate(
//       { email: email },
//       { ...req.body },
//       next()
//     );
//     if (!existingUser) {
//       return res.status(401).json({ message: "email buruu bna" });
//     }
//     console.log(req.body);
//     res.status(201).json({ user: existingUser });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "ymar neg zuil buruu bna." });
//   }
// };
