const express = require("express");
const path = require("path");
const {
  getCustomerShoppingCart,
  getShoppingCartItem,
  addShoppingCartItem,
  updateShoppingCartItem,
  deleteShoppingCartItem,
} = require("../controllers/cartControllers");
const router = express.Router();

router.get("/customers/:id", getCustomerShoppingCart);
router.get("/customers/:id/:itemId", getShoppingCartItem);
router.post("/customers/:id", addShoppingCartItem);
router.put("/customers/:id/:itemId", updateShoppingCartItem);
router.delete("/customers/:id/:itemId", deleteShoppingCartItem);

module.exports = router;
