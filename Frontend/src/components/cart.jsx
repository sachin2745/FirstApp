import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, itemCount } =
    useCart();

    console.log(cartItems);
    
  const handleQuantityChange = async (itemId, newQuantity) => {
    if (newQuantity >= 1) {
      await updateQuantity(itemId, newQuantity);
    }
  };


  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Your Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-medium text-gray-600">
              Your cart is empty
            </h2>
            <p className="mt-4 text-gray-500">
              Start shopping to add items to your cart
            </p>
            <Link
              to="/store"
              className="mt-6 inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <ul className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <li key={item.id} className="p-6">
                      <div className="flex flex-col sm:flex-row">
                        <div className="flex-shrink-0">
                          <img
                            src={`${import.meta.env.VITE_API_URL}${
                              item.variant.images[0].imageUrl
                            }`}
                            alt={item.variant.product.name}
                            className="w-24 h-24 rounded-md object-cover"
                          />
                        </div>
                        <div className="mt-4 sm:mt-0 sm:ml-6 flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-gray-900">
                              {item.variant.product.name}
                            </h3>
                            <p className="ml-4 text-lg font-medium text-gray-900">
                              ₹{(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.variant.color} | Size:{" "}
                            {item.variant.sizes.find(size => size.id === item.sizeId)?.size || "N/A"}
                          </p>
                          <div className="mt-4 flex items-center">
                            <div className="flex items-center border border-gray-300 rounded-md">
                              <button
                                onClick={() =>
                                  handleQuantityChange(
                                    item.id,
                                    item.quantity - 1
                                  )
                                }
                                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                              >
                                -
                              </button>
                              <span className="px-3 py-1">{item.quantity}</span>
                              <button
                                onClick={() =>
                                  handleQuantityChange(
                                    item.id,
                                    item.quantity + 1
                                  )
                                }
                                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                              >
                                +
                              </button>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Order Summary
                </h2>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">
                    Subtotal ({itemCount} items)
                  </span>
                  <span className="font-medium">₹{cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between">
                  <span className="text-lg font-medium">Total</span>
                  <span className="text-lg font-medium">
                    ₹{cartTotal.toFixed(2)}
                  </span>
                </div>
                <button className="mt-6 w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700">
                  Checkout
                </button>
                <div className="mt-4 text-center">
                  <Link
                    to="/store"
                    className="text-indigo-600 hover:text-indigo-500 text-sm font-medium"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
