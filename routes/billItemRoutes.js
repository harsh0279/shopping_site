const express = require("express");
const path = require("path");
const {
  getAllBillItems,
  getBillItemById,
  createBillItem,
  updateBillItemById,
  deleteBillItemById,
} = require("../controllers/billItemController");

const router = express.Router();

router.get("/", getAllBillItems);
router.get("/:id", getBillItemById);
router.post("/", createBillItem);
router.put("/:id", updateBillItemById);
router.delete("/:id", deleteBillItemById);

module.exports = router;
