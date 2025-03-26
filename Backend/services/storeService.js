const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createProduct = async (name, description, category, variants) => {
  console.log("Received Data:", { name, description, category, variants });
  return await prisma.product.create({
    data: {
      name,
      description,
      category,
      variants: {
        create: variants.map((variant) => ({
          color: variant.color,
          sizes: {
            create: variant.sizes.map((size) => ({
              size: size.size,
              price: size.price,
              stock: size.stock || 0, // Ensuring stock is included
            })),
          },
          images: {
            create: variant.images.map((image) => ({
              imageUrl: image.imageUrl,
              altText: image.altText || "", // Handling optional alt text
            })),
          },
        })),
      },
    },
    include: {
      variants: {
        include: {
          sizes: true,
          images: true,
        },
      },
    },
  });
};

// Fetch all products with variants, sizes, and images
const fetchAllProducts = async () => {
  return await prisma.product.findMany({
    include: {
      variants: {
        include: {
          sizes: true,
          images: true,
        },
      },
    },
  });
};

// Fetch product details by ID
const fetchProductById = async (id) => {
  return await prisma.product.findUnique({
    where: { id: id },
    include: {
      variants: {
        include: {
          sizes: true,
          images: true,
        },
      },
    },
  });
};

// Update product variant details
const updateProductVariant = async (
  variantId,
  sizeId,
  newSizePrice,
  newColor,
  newImage
) => {
  if (sizeId && newSizePrice) {
    await prisma.productSize.update({
      where: { id: parseInt(sizeId) },
      data: { price: newSizePrice },
    });
  }
  if (newColor) {
    await prisma.productVariant.update({
      where: { id: parseInt(variantId) },
      data: { color: newColor },
    });
  }
  if (newImage) {
    await prisma.productImage.create({
      data: { variantId: parseInt(variantId), imageUrl: newImage },
    });
  }
  return { message: "Variant updated successfully" };
};

module.exports = {
  createProduct,
  fetchAllProducts,
  fetchProductById,
  updateProductVariant,
};
