const cartService = require ("../services/cartService");



  const getCart= async(req, res)=> {
    try {
      const sessionId = req.headers["session-id"];
      if (!sessionId) {
        return res.status(400).json({ error: "Session ID is required" });
      }

      const cartItems = await cartService.getCartItems(sessionId);
      res.json(cartItems);
    } catch (error) {
      console.error("Error getting cart:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  const addToCart= async(req, res)=> {
    try {
      const sessionId = req.cookies.sessionId || req.headers["session-id"];
      const { variantId, sizeId, quantity, price } = req.body;

      if (!sessionId || !variantId || !sizeId || !quantity || !price) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const cartItem = await cartService.addToCart(
        sessionId,
        variantId,
        sizeId,
        quantity,
        price
      );
      res.json(cartItem);
    } catch (error) {
      console.error("Error adding to cart:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  const removeFromCart= async(req, res)=> {
    try {
      const sessionId = req.cookies.sessionId || req.headers["session-id"];
      const { itemId } = req.params;

      if (!sessionId || !itemId) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const updatedCart = await cartService.removeCartItem(sessionId, itemId);
      res.json(updatedCart);
    } catch (error) {
      console.error("Error removing from cart:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  const updateQuantity= async(req, res)=> {
    try {
      const sessionId = req.cookies.sessionId || req.headers["session-id"];
      const { itemId } = req.params;
      const { quantity } = req.body;

      if (!sessionId || !itemId || quantity === undefined) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const updatedItem = await cartService.updateCartItemQuantity(
        sessionId,
        itemId,
        quantity
      );
      res.json(updatedItem);
    } catch (error) {
      console.error("Error updating cart item quantity:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }


module.exports = {
    getCart,
    addToCart,
    removeFromCart,
    updateQuantity
  };