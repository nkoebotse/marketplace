const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { createOrder, getOrdersForUser, getOrderById, updateOrderStatus } = require('../controllers/orderController');
const router = express.Router();

router.post('/', protect, createOrder);             // Client access
router.get('/', protect, getOrdersForUser);         // Client access
router.route('/:id')
  .get(protect, getOrderById)                       // Client access
  .put(protect, updateOrderStatus);                 // Client access/Admin for status update

module.exports = router;
