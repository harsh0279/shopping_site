const express = require("express");
var multer = require("multer");
const path = require("path");
const {
  getAllCategories,
  getCategoryById,
  createNewCategory,
  updateCategoryById,
  deleteCategoryById,
} = require("../controllers/categoryControllers");
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/category_images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

router.get("/", getAllCategories);
router.get("/:id", getCategoryById);
router.post("/", upload.single("image"), createNewCategory);
router.put("/:id", updateCategoryById);
router.delete("/:id", deleteCategoryById);

module.exports = router;
