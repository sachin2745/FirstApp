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

const createNewbulkProduct = async (req, res) => {
  try {
    const { name, description, category, variants } = req.body;
    const mainImage = req.files?.mainImage?.[0];
    const variantImages = req.files?.variantImages || [];

    // Parse variants if it's a string
    const parsedVariants = typeof variants === 'string' ? JSON.parse(variants) : variants;

    if (!name || !category || !parsedVariants || !Array.isArray(parsedVariants)) {
      // Cleanup uploaded files if validation fails
      if (mainImage) fs.unlinkSync(mainImage.path);
      variantImages.forEach(img => fs.unlinkSync(img.path));
      return res.status(400).json({ error: "Invalid input data" });
    }

    // Process the variants with their images
    const processedVariants = parsedVariants.map((variant, idx) => {
      // If there are uploaded variant images, use those
      if (variantImages.length > 0) {
        const startIdx = idx * (variant.images?.length || 0);
        const endIdx = startIdx + (variant.images?.length || 0);
        const currentVariantImages = variantImages.slice(startIdx, endIdx);
        
        return {
          ...variant,
          images: currentVariantImages.map((img, imgIdx) => ({
            imageUrl: `/uploads/${img.filename}`,
            altText: variant.images?.[imgIdx]?.altText || `${name} ${variant.color}`
          }))
        };
      }
      
      // Otherwise use the image URLs from the Excel file
      return variant;
    });

    const newProduct = await prisma.product.create({
      data: {
        name,
        description: description || '',
        category,
        mainImage: mainImage ? `/uploads/${mainImage.filename}` : null,
        variants: {
          create: processedVariants.map(variant => ({
            color: variant.color,
            slug: `${name.toLowerCase().replace(/\s+/g, '-')}-${variant.color.toLowerCase().replace(/\s+/g, '-')}-${variant.sizes[0]?.size?.toLowerCase().replace(/\s+/g, '-') || 'default'}`,
            sizes: {
              create: variant.sizes.map(size => ({
                size: size.size,
                price: parseFloat(size.price) || 0,
                stock: parseInt(size.stock) || 0
              }))
            },
            images: {
              create: variant.images.map(img => ({
                imageUrl: img.imageUrl,
                altText: img.altText
              }))
            }
          }))
        }
      },
      include: {
        variants: {
          include: {
            sizes: true,
            images: true
          }
        }
      }
    });

    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    // Cleanup any uploaded files on error
    if (req.files) {
      Object.values(req.files).forEach(files => {
        files.forEach(file => fs.unlinkSync(file.path));
      });
    }
    res.status(500).json({ error: 'Failed to create product' });
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
  createNewbulkProduct  
};
