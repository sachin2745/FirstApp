// Import required modules
const express = require("express"); // Express framework for creating the server
const { PrismaClient } = require("@prisma/client"); // ORM for database operations
require("dotenv").config(); // Loads environment variables from .env file
const cors = require("cors"); // Middleware for handling Cross-Origin Resource Sharing (CORS)
const path = require('path');


// Initialize Express app and Prisma client
const app = express();
const prisma = new PrismaClient();

// Import routes
const todoRoutes = require("./routes/todoRoutes");
const storeRoutes = require("./routes/storeRoutes");

// Middleware setup
app.use(express.json()); // Parses incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data (form data)
app.use(cors()); // Enables CORS for handling cross-origin requests

// Define routes
app.use("/todos", todoRoutes); // Mount todo routes under the `/todos` path
app.use("/store", storeRoutes); 

// Default route (health check)
app.get("/", (req, res) => {
  res.status(200).send("Hello, World! Server is running.");
});

// Serve static files from the public directory
app.use('/uploads', express.static(path.join(__dirname, 'public', 'uploads')));


// Define the port from environment variables or use default
const PORT = process.env.PORT || 5005;

// Start the server with error handling
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
}).on("error", (err) => {
  console.error("Server failed to start:", err.message);
});
