const express = require("express");
const { createNewProduct,getAllProducts, getProductById, updateVariant } = require("../controllers/storeController");

const router = express.Router();

router.post("/products/add", createNewProduct);
router.get("/products/getall", getAllProducts);
router.get("/products/getById/:id", getProductById);
router.put("/products/variant/:variantId", updateVariant);

module.exports = router;
