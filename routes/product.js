const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { validateRequest, validateObjectId } = require('../middleware/validate');
const { 
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

// GET /products
router.get('/', getAllProducts);

// GET /products/:id
router.get('/:id', validateObjectId('id'), getProductById);

// POST /products
router.post(
  '/',
  [
    body('title').notEmpty().withMessage('Title is required'),
    body('price').isNumeric().withMessage('Price must be a number'),
    body('category').notEmpty().withMessage('Category is required')
  ],
  validateRequest,
  createProduct
);

// PUT /products/:id
router.put(
  '/:id',
  validateObjectId('id'),
  [
    body('title').optional().notEmpty().withMessage('Title cannot be empty'),
    body('price').optional().isNumeric().withMessage('Price must be a number')
  ],
  validateRequest,
  updateProduct
);

// DELETE /products/:id
router.delete('/:id', validateObjectId('id'), deleteProduct);

module.exports = router;