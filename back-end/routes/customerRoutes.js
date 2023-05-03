const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  getUsers,
  updateUser,
  deleteUsers,
} = require("../controller/CustomerController");

router
  .get("/", getUsers)
  .post("/signup", signup)
  .post("/login", login)
  .put("/", updateUser)
  .delete("/", deleteUsers);
module.exports = router;
