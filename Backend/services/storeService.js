const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createProduct = async (name, description, category, variants) => {
  return await prisma.product.create({
    data: {
      name,
      description,
      category,
      variants: {
        create: variants.map((variant) => {
          // Find the largest size (or default to the first size)
          const largestSize = variant.sizes
            .map((size) => size.size.toLowerCase().replace(/\s+/g, "-"))
            .sort((a, b) => b.length - a.length)[0]; // Sorting based on length for consistency

          return {
            color: variant.color,
            slug: `${name.toLowerCase().replace(/\s+/g, "-")}-${variant.color
              .toLowerCase()
              .replace(/\s+/g, "-")}-${largestSize}`,
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
          };
        }),
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
  return await prisma.productVariant.findMany({
    include: {
      product: {
        select: {
          id: true,
          name: true,
          description: true,
          category: true,
        },
      },
      sizes: {
        select: {
          id: true,
          price: true,
          size: true,
        },
      },
      images: {
        select: {
          id: true,
          imageUrl: true,
          altText: true,
        },
      },
    },
  });
};

// Fetch product details by ID
const fetchProductById = async (id) => {
  return await prisma.productVariant.findUnique({
    where: { slug: id },
    include: {
      product: {
        include: {
          variants: {
            include: {
              sizes: true,
              images: true,
            },
          },
        },
      },
      sizes: true,
      images: true,
    },
  });
};

module.exports = {
  createProduct,
  fetchAllProducts,
  fetchProductById,
};
