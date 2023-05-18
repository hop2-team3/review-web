const CompanyModel = require("../models/companyModel");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "default_secret";
const bcrypt = require("bcrypt");

exports.getUsers = async (req, res) => {
  console.log(req.params);
  try {
    const users = await CompanyModel.find();
    return res.status(200).json({
      message: true,
      data: users,
    });
  } catch (error) {
    return res.status(400).json({ message: error, data: null });
  }
};

exports.getUsersCategories = async (req, res) => {
  try {
    const users = await CompanyModel.find({ category: req.category });
    console.log(users);
    return res.status(200).json({
      data: users,
    });
  } catch (error) {
    return res.status(400).json({ message: error, data: null });
  }
};

exports.signup = async (req, res, next) => {
  try {
    const { companyName, password, email, link, phoneNumber, category } =
      req.body;
    const existingUser = await CompanyModel.findOne({ email: email });
    if (existingUser) {
      return res.status(409).json({ message: "burtgeltei hereglegch bna." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await CompanyModel.create({
      companyName: companyName,
      phoneNumber: phoneNumber,
      category: category,
      email: email,
      password: hashedPassword,
      link: link,
      // category: category,
    });
    const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);
    res.status(201).json({ user: result, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "ymar neg zuil buruu bna" });
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const existingUser = await CompanyModel.findOne({ email: email });
    if (!existingUser) {
      return res.status(401).json({ message: "email buruu bna" });
    }
    const matchPassword = await bcrypt.compare(password, existingUser.password);

    if (!matchPassword) {
      return res.status(402).json({ message: "nuuts ug buruu bna" });
    }
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      SECRET_KEY
    );
    res.status(201).json({ user: existingUser, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "ymar neg zuil buruu bna." });
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const { email } = req.body;
    const existingUser = await CompanyModel.findOneAndUpdate(
      { email: email },
      { ...req.body }
    );
    if (!existingUser) {
      return res.status(401).json({ message: "email buruu bna" });
    }
    console.log(req.body);
    res.status(201).json({ data: existingUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "ymar neg zuil buruu bna." });
  }
};

exports.deleteUsers = async (req, res, next) => {
  try {
    const users = await CompanyModel.deleteMany({});
    res.status(200).json({
      message: "all users deleted",
      data: "deleted",
    });
  } catch (error) {
    return res.status(400).json({ message: error, data: null });
  }
};
