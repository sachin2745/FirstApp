const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { createNewProduct, getAllProducts, getProductById, updateVariant } = require("../controllers/storeController");

const router = express.Router();

// Configure storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, '../static/uploads');
    // Create directory if it doesn't exist
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

// File filter to accept only images
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPEG, PNG, GIF, and WEBP are allowed.'), false);
  }
};

const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

// Handle multiple files - adjust according to your needs
const multiUpload = upload.fields([
  { name: 'mainImage', maxCount: 1 },
  { name: 'variantImages', maxCount: 10 }
]);

// Or handle array of files for variants
router.post("/products/add", multiUpload, createNewProduct);
router.get("/products/getall", getAllProducts);
router.get("/products/getById/:id", getProductById);

module.exports = router;