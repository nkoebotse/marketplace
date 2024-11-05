const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { approveVendor } = require('../controllers/vendorController');
const { approveProduct } = require('../controllers/productController');
const router = express.Router();

router.put('/vendor/:id', protect, approveVendor);       // Admin only
router.put('/product/:id', protect, approveProduct);     // Admin only

module.exports = router;
