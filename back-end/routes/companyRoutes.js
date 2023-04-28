const express = require("express");
const router = express.Router();
const { signup, login, edit } = require("../controller/CustomerController");

router.post("/", signup).post("/login", login).put("/", edit);
module.exports = router;
