// controllers/cartController.js
const CartItem = require('../models/cartItem');
const Product = require('../models/product');
const mongoose = require('mongoose');

// POST /cart
const addToCart = async (req, res, next) => {
  try {
    // Postman testing ke liye userId body se le rahe hain
    const userId = req.body.userId || (req.user && req.user.id);
    console.log("UserId:", userId);
    if (!userId)
      return res.status(401).json({ success: false, message: 'User not found' });

    const { product, quantity = 1 } = req.body;

    if (!mongoose.Types.ObjectId.isValid(product)) {
      return res
        .status(400)
        .json({ success: false, message: 'Invalid product id format' });
    }

    const productExists = await Product.exists({ _id: product });
    if (!productExists) {
      return res
        .status(400)
        .json({ success: false, message: 'Product does not exist' });
    }

    // Merge existing cart item if present
    const existing = await CartItem.findOne({ userId, product });
    if (existing) {
      existing.quantity = existing.quantity + Number(quantity || 1);
      const saved = await existing.save();
      return res.status(200).json({ success: true, data: saved });
    }

    const item = await CartItem.create({ userId, product, quantity });
    return res.status(201).json({ success: true, data: item });
  } catch (err) {
    next(err);
  }
};

// GET /cart?userId=...  (optional query)
const getCartItems = async (req, res, next) => {
  try {
    const queryUser = req.query.userId || (req.user && req.user.id);
    if (!queryUser)
      return res.status(400).json({ success: false, message: 'userId required' });

    const items = await CartItem.find({ userId: queryUser }).populate('product');
    return res.json({ success: true, data: items });
  } catch (err) {
    next(err);
  }
};

// controllers/cartController.js
const removeCartItem = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const userId = req.body.userId || "user123"; // match POST request userId

    console.log("Deleting for:", { userId, productId });

    const deletedItem = await CartItem.findOneAndDelete({
      userId: userId,
      product: productId
    });

    if (!deletedItem) {
      return res.status(404).json({ success: false, message: "Cart item not found" });
    }

    return res.json({ success: true, message: "Item removed from cart", item: deletedItem });
  } catch (err) {
    next(err);
  }
};


module.exports = { addToCart, getCartItems, removeCartItem};