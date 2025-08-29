const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { validateRequest } = require('../middleware/validate');
const { getAllCategories, createCategory } = require('../controllers/categoryController');

// GET /categories
router.get('/', getAllCategories);

// POST /categories
router.post(
  '/',
  body('name').notEmpty().withMessage('Category name is required'),
  validateRequest,
  createCategory
);

module.exports = router;