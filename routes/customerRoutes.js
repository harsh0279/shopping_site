const express = require("express");
const path = require("path");
const {
  getAllCustomers,
  getCustomerById,
  createNewCustomer,
  updateCustomerById,
  deleteCustomerById,
} = require("../controllers/customerControllers");
const router = express.Router();

router.get("/", getAllCustomers);
router.get("/:id", getCustomerById);
router.post("/", createNewCustomer);
router.put("/:id", updateCustomerById);
router.delete("/:id", deleteCustomerById);

module.exports = router;
