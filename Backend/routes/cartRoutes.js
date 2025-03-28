const express = require("express");
const cartController = require ("../controllers/cartController");

const router = express.Router();

router.get("/getCartItem", cartController.getCart);
router.post("/addToCart", cartController.addToCart);
router.delete("/item/:itemId", cartController.removeFromCart);
router.put("/item/:itemId/quantity", cartController.updateQuantity);

module.exports = router;