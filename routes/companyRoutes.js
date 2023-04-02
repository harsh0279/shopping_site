const express = require("express");
var multer = require("multer");
const path = require("path");
const {
  getAllCompanies,
  getCompanyById,
  createNewCompany,
  updateCompanyById,
  deleteCompanyById,
} = require("../controllers/companyControllers");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/company_logos");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

router.get("/", getAllCompanies);
router.get("/:id", getCompanyById);
router.post("/", upload.single("image"), createNewCompany);
router.put("/:id", updateCompanyById);
router.delete("/:id", deleteCompanyById);

module.exports = router;
