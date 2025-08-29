// routes/cart.js
const express = require('express');
const router = express.Router();
const { body, param } = require('express-validator');
const { validateRequest, validateObjectId } = require('../middleware/validate');

const { addToCart, getCartItems, removeCartItem } = require('../controllers/cartController');

// POST /cart
// No userId in body required — we use req.user.id from authMock
router.post(
  '/',
  [
    body('product').notEmpty().withMessage('Product ID is required'),
    body('quantity').optional().isNumeric().withMessage('Quantity must be a number')
  ],
  validateRequest,
  addToCart
);

// GET /cart
// Optionally allow query ?userId=... to view a specific user's cart (for admin/testing).
// If not provided, will return current req.user.id cart.
router.get('/', getCartItems);

router.delete('/:productId', validateObjectId('productId'), removeCartItem);

module.exports = router;