const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const {
  createNewProduct,
  getAllProducts,
  getProductById,
  createBulkProduct,
} = require("../controllers/storeController");

const router = express.Router();

// Configure storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, "../static/uploads");
    // Create directory if it doesn't exist
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

// File filter to accept only images
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Invalid file type. Only JPEG, PNG, GIF, and WEBP are allowed."
      ),
      false
    );
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
});

// Handle multiple files
const multiUpload = upload.fields([
  { name: 'mainImage', maxCount: 1 },
  { name: 'variantImages', maxCount: 10 }
]);

// Error handling middleware for Multer
const handleUploadErrors = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    // A Multer error occurred when uploading
    return res.status(400).json({
      success: false,
      message: err.message
    });
  } else if (err) {
    // An unknown error occurred
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }
  // Everything went fine
  next();
};



// Routes
router.post("/products/add", multiUpload, handleUploadErrors, createNewProduct);
router.post("/products/bulk-upload",  createBulkProduct);
router.get("/products/getall", getAllProducts);
router.get("/products/getById/:id", getProductById);

module.exports = router;