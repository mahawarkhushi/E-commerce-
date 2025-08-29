const Category = require('../models/category');

// GET /categories
const getAllCategories = async (req, res, next) => {
  try {
    const cats = await Category.find().sort({ name: 1 });
    return res.json({ success: true, data: cats });
  } catch (err) { next(err); }
};

// POST /categories  (duplicate name check - case-insensitive)
const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    const existing = await Category.findOne({ name: { $regex: `^${name}$`, $options: 'i' } });
    if (existing) {
      return res.status(400).json({ success: false, message: 'Category already exists' });
    }
    const cat = await Category.create({ name });
    return res.status(201).json({ success: true, data: cat });
  } catch (err) { next(err); }
};

module.exports = { getAllCategories, createCategory };