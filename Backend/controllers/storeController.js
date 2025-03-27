const storeService = require("../services/storeService");
const xlsx = require("xlsx");
const fs = require("fs");

const createNewProduct = async (req, res) => {
  try {
    const { name, description, category, variants } = req.body;

    // Handle uploaded files
    const mainImage = req.files?.mainImage?.[0];
    const variantImages = req.files?.variantImages || [];

    // Process the images - you might want to save paths to database
    const imagePaths = {
      mainImage: mainImage ? `/uploads/${mainImage.filename}` : null,
      variantImages: variantImages.map((img) => `/uploads/${img.filename}`),
    };

    // If you're receiving variants as JSON string, parse it
    const parsedVariants =
      typeof variants === "string" ? JSON.parse(variants) : variants;

    if (
      !name ||
      !category ||
      !parsedVariants ||
      !Array.isArray(parsedVariants)
    ) {
      // Clean up uploaded files if validation fails
      if (mainImage) fs.unlinkSync(mainImage.path);
      variantImages.forEach((img) => fs.unlinkSync(img.path));
      return res.status(400).json({ error: "Invalid input data" });
    }

    // Add image paths to your variants data
    const variantsWithImages = parsedVariants.map((variant, index) => ({
      ...variant,
      images: variant.images.map((img, imgIndex) => ({
        ...img,
        imageUrl:
          imagePaths.variantImages[index * variant.images.length + imgIndex] ||
          img.imageUrl,
      })),
    }));

    const newProduct = await storeService.createProduct(
      name,
      description,
      category,
      variantsWithImages,
      imagePaths.mainImage
    );

    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    // Clean up any uploaded files on error
    if (req.files) {
      Object.values(req.files).forEach((files) => {
        files.forEach((file) => fs.unlinkSync(file.path));
      });
    }
    res.status(500).json({ error: "Failed to create product" });
  }
};

const createBulkProduct = async (req, res) => {
  try {
    const { products } = req.body;

    // Log the incoming data
    console.log("Incoming Products Data:", JSON.stringify(products, null, 2));

    if (!products || !Array.isArray(products)) {
      return res.status(400).json({ error: "Products array is required" });
    }

    const results = await Promise.allSettled(
      products.map(async (product) => {
        try {
          if (!product.variants || !Array.isArray(product.variants)) {
            throw new Error(`Product '${product.name}' is missing 'variants' array`);
          }

          product.variants.forEach((variant, index) => {
            if (!variant.sizes || !Array.isArray(variant.sizes)) {
              throw new Error(
                `Variant #${index} of product '${product.name}' is missing 'sizes' array`
              );
            }
          });

          return await storeService.createProduct(product);
        } catch (err) {
          return Promise.reject({
            error: err.message || "Unknown error occurred",
            product,
          });
        }
      })
    );

    const successfulProducts = results
      .filter((r) => r.status === "fulfilled")
      .map((r) => r.value);

    const failedProducts = results
      .filter((r) => r.status === "rejected")
      .map((r) => r.reason);

    res.json({
      success: failedProducts.length === 0,
      createdCount: successfulProducts.length,
      products: successfulProducts,
      failed: failedProducts,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
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

    const response = await storeService.updateProductVariant(
      variantId,
      sizeId,
      newSizePrice,
      newColor,
      newImage
    );
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: "Failed to update variant" });
  }
};

module.exports = {
  createNewProduct,
  getAllProducts,
  getProductById,
  createBulkProduct,
};
