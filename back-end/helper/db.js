const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const uri = process.env.MONGO_DB_URI;

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Database successfully connected!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connect;
