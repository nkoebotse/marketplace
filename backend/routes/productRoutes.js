const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { createProduct, getProducts, getProductById, updateProduct, deleteProduct, approveProduct } = require('../controllers/productController');
const router = express.Router();

router.route('/')
  .get(getProducts)                   // Public access
  .post(protect, createProduct);       // Vendor access

router.route('/:id')
  .get(getProductById)                 // Public access
  .put(protect, updateProduct)         // Vendor access
  .delete(protect, deleteProduct);     // Vendor access

router.put('/approve/:id', protect, approveProduct); // Admin access

module.exports = router;
