const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  next();
};

const validateObjectId = (idParam) => {
  return (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params[idParam])) {
      return res.status(400).json({ success: false, message: 'Invalid ID' });
    }
    next();
  };
};

module.exports = { validateRequest, validateObjectId };