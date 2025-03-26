const storeService = require("../services/storeService");


const createNewProduct = async (req, res) => {
  try {
    const { name, description,category, variants } = req.body;

    if (!name || !category || !variants || !Array.isArray(variants)) {
      return res.status(400).json({ error: "Invalid input data" });
    }

    const newProduct = await storeService.createProduct(name, description, category, variants);

    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: "Failed to create product" });
  }
};


// Controller to fetch all products
const getAllProducts = async (req, res) => {
  try {
    const products = await storeService.fetchAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

// Controller to fetch a product by ID
const getProductById = async (req, res) => {
  try {
    const product = await storeService.fetchProductById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
};

// Controller to update a product variant
const updateVariant = async (req, res) => {
  try {
    const { variantId } = req.params;
    const { sizeId, newSizePrice, newColor, newImage } = req.body;

    const response = await storeService.updateProductVariant(variantId, sizeId, newSizePrice, newColor, newImage);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: "Failed to update variant" });
  }
};

module.exports = { createNewProduct, getAllProducts, getProductById, updateVariant };
