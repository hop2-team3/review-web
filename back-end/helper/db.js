const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const uri = "mongodb+srv://tuguldur:hop2t3@cluster0.biuuhnr.mongodb.net/test";

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Successfully connected!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connect;
