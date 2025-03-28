const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getOrCreateCart = async (sessionId) => {
  let cart = await prisma.cart.findUnique({
    where: { sessionId },
    include: {
      items: {
        include: {
          variant: {
            include: {
              product: true,
              images: true,
              sizes: true,
            },
          },
        },
      },
    },
  });

  if (!cart) {
    cart = await prisma.cart.create({
      data: { sessionId },
      include: {
        items: {
          include: {
            variant: {
              include: {
                product: true,
                images: true,
                sizes: true,
              },
            },
          },
        },
      },
    });
  }

  return cart;
};

const addToCart = async (sessionId, variantId, sizeId, quantity, price) => {
  let cart = await getOrCreateCart(sessionId);

  // Check if item already exists in cart
  const existingItem = cart.items.find(
    (item) => item.variantId === variantId && item.sizeId === sizeId
  );

  if (existingItem) {
    // Update quantity if item exists
    const updatedItem = await prisma.cartItem.update({
      where: { id: existingItem.id },
      data: { quantity: existingItem.quantity + quantity },
      include: {
        variant: {
          include: {
            product: true,
            images: true,
            sizes: true,
          },
        },
      },
    });

    return updatedItem;
  } else {
    // Add new item to cart
    const newItem = await prisma.cartItem.create({
      data: {
        cartId: cart.id,
        variantId,
        sizeId,
        quantity,
        price,
      },
      include: {
        variant: {
          include: {
            product: true,
            images: true,
            sizes: true,
          },
        },
      },
    });

    return newItem;
  }
};

const getCartItems = async (sessionId) => {
  const cart = await getOrCreateCart(sessionId);
  return cart.items;
};

const removeCartItem = async (sessionId, itemId) => {
  const cart = await getOrCreateCart(sessionId);

  await prisma.cartItem.delete({
    where: { id: itemId, cartId: cart.id },
  });

  return getCartItems(sessionId);
};

const updateCartItemQuantity = async (sessionId, itemId, quantity) => {
  if (quantity <= 0) {
    return removeCartItem(sessionId, itemId);
  }

  const cart = await getOrCreateCart(sessionId);

  const updatedItem = await prisma.cartItem.update({
    where: { id: itemId, cartId: cart.id },
    data: { quantity },
    include: {
      variant: {
        include: {
          product: true,
          images: true,
          sizes: true,
        },
      },
    },
  });

  return updatedItem;
};

module.exports = {
  getOrCreateCart,
  addToCart,
  getCartItems,
  removeCartItem,
  updateCartItemQuantity,
};
