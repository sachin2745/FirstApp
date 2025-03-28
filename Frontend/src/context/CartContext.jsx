import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CartContext = createContext(undefined);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [sessionId, setSessionId] = useState("");

  useEffect(() => {
    const storedSessionId = localStorage.getItem("sessionId");
    if (storedSessionId) {
      setSessionId(storedSessionId);
    } else {
      const newSessionId = "session-" + Math.random().toString(36).substr(2, 9);
      localStorage.setItem("sessionId", newSessionId);
      setSessionId(newSessionId);
    }
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/cart/getCartItem`,
        { headers: { "session-id": sessionId } }
      );
      setCartItems(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching cart items:", error);
      setCartItems([]);
    }
  };

  useEffect(() => {
    if (sessionId) {
      fetchCartItems();
    }
  }, [sessionId]);

  const addToCart = async (item) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/cart/addToCart`,
        item,
        { headers: { "session-id": sessionId } }
      );
      fetchCartItems();
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/cart/item/${itemId}`,
        { headers: { "session-id": sessionId } }
      );
      fetchCartItems();
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  const updateQuantity = async (itemId, quantity) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/cart/item/${itemId}/quantity`,
        { quantity },
        { headers: { "session-id": sessionId } }
      );
      fetchCartItems();
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartTotal,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
