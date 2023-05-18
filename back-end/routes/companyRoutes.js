const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  getUsers,
  updateUser,
  deleteUsers,
  getUsersCategories,
} = require("../controller/CompanyController");

router
  .get("/", getUsers)
  .post("/signup", signup)
  .post("/login", login)
  .post("/", getUsersCategories)
  .put("/", updateUser)
  .delete("/", deleteUsers);
module.exports = router;
