const express = require("express");
const path = require("path");
const {
  getBillsByCustomerId,
  getAllBills,
  getBillById,
  createBill,
  updateBill,
  deleteBill,
} = require("../controllers/billControllers");
const router = express.Router();

router.get("/", getAllBills);
router.get("/:id", getBillById);
router.post("/", createBill);
router.put("/:id", updateBill);
router.delete("/:id", deleteBill);
router.get("/customers/:id", getBillsByCustomerId);

module.exports = router;
