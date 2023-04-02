const express = require("express");
const path = require("path");
const {
  getAllComments,
  getCommentsById,
  createComment,
  updateCommentById,
  deleteCommentById,
  getCommentsByCustomerId,
  getCommentsByProductId,
} = require("../controllers/commentControllers");

const router = express.Router();

router.get("/", getAllComments);
router.get("/:id", getCommentsById);
router.post("/", createComment);
router.put("/:id", updateCommentById);
router.delete("/:id", deleteCommentById);
router.get("/customers/:id", getCommentsByCustomerId);
router.get("/products/:id", getCommentsByProductId);

module.exports = router;
