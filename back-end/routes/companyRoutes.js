const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  getUsers,
  getUser,
  updateUser,
  deleteUsers,
  getUsersCategories,
} = require("../controller/CompanyController");

router
  .get("/", getUsers)
  .get("/:id", getUser)
  .post("/signup", signup)
  .post("/login", login)
  .post("/", getUsersCategories)
  .put("/", updateUser)
  .delete("/", deleteUsers);
module.exports = router;
