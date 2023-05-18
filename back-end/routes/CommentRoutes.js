const express = require("express");
const auth = require("../middlewaes/auth");
const router = express.Router();
const {
  getComments,
  updateComment,
  deleteComments,
  newComment,
} = require("../controller/CommentController");

router
  .get("/", getComments)
  .post("/", newComment)
  .put("/", updateComment)
  .delete("/", deleteComments);
module.exports = router;
