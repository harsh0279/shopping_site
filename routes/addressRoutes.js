const express = require("express");
const path = require("path");
const {
  getAllDeliveryAddresses,
  getDeliveryAddressById,
  createDeliveryAddress,
  updateDeliveryAddress,
  deleteDeliveryAddress,
  getAllDeliveryAddressesForCustomer,
} = require("../controllers/addressControllers");
const router = express.Router();

router.get("/", getAllDeliveryAddresses);
router.get("/:id", getDeliveryAddressById);
router.post("/", createDeliveryAddress);
router.put("/:id", updateDeliveryAddress);
router.delete("/:id", deleteDeliveryAddress);
router.get("/customers/:id", getAllDeliveryAddressesForCustomer);

module.exports = router;
