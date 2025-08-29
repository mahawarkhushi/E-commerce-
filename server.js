const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// --- add mock auth middleware ---
const authMock = require('./middleware/authMock');
app.use(authMock); // safe: adds req.user.id for request lifecycle

// Routes
app.use('/products', require('./routes/product'));
app.use('/categories', require('./routes/category'));
app.use('/cart', require('./routes/cart'));

// Default route
app.get('/', (req, res) => res.send('API running'));

// Error middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  //