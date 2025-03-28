import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import { Bounce } from "react-toastify";
import { CartProvider } from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      <App />
    </CartProvider>
  </BrowserRouter>
);
