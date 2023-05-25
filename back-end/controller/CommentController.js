const CommentModel = require("../models/commentModel");
const CustomerModel = require("../models/customerModel");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "default_secret";
const bcrypt = require("bcrypt");

exports.getComments = async (req, res) => {
  try {
    const comments = await CommentModel.find();
    return res.status(200).json({
      message: true,
      data: comments,
    });
  } catch (error) {
    return res.status(400), json({ message: error, data: null });
  }
};

exports.getComment = async (req, res) => {
  const { id } = req.params;
  try {
    const comments = await CommentModel.find({ companyId: id });
    return res.status(200).json({
      message: true,
      data: comments,
    });
  } catch (error) {
    return res.status(400), json({ message: error, data: null });
  }
};

exports.newComment = async (req, res) => {
  const { comment, rate, title, companyId, date } = req.body;
  const user = await CustomerModel.findOne({ token: req.userId });
  try {
    if (comment && rate) {
      const newComment = await CommentModel.create({
        comment: comment,
        rate: rate,
        title: title,
        firstname: user.firstname,
        lastname: user.lastname,
        companyId: companyId,
        dateOfExperience: date,
      });
      return res.status(200).json({
        message: true,
        data: newComment,
      });
    } else {
      return res.status(301).json({
        message: "dutuu ugugdul bna.",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "ymar neg zuil buruu bna.",
    });
  }
};

exports.updateComment = async (req, res, next) => {
  try {
    const { email } = req.body;
    const existingcomment = await CommentModel.findOneAndUpdate(
      { email: email },
      { ...req.body }
    );
    if (!existingcomment) {
      return res.status(401).json({ message: "email buruu bna" });
    }
    console.log(req.body);
    res.status(201).json({ data: existingcomment });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "ymar neg zuil buruu bna." });
  }
};

exports.deleteComments = async (req, res, next) => {
  try {
    const comments = await CommentModel.deleteMany({});
    res.status(200).json({
      message: "all comments deleted",
    });
  } catch (error) {
    return res.status(400).json({ message: error, data: null });
  }
};
