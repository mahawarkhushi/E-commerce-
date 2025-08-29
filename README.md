# 🛍️ E-commerce Product API (Backend)
LIVE LINK -> https://e-commerce-8-l92z.onrender.com/


This project is a **RESTful API for managing products** in an E-commerce application.
It is built with **Node.js, Express, and MongoDB**.

---

## 🚀 Features

- Add, update, delete, and fetch products
- Product categories support
- Input validation using middleware
- Error handling with proper status codes
- MongoDB integration for persistent storage

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Validation**: express-validator
- **Tools**: Nodemon, Postman

---

## 📂 Project Structure


```

Backend/

│

├── routes/

│ └── productRoutes.js

├── controllers/

│ └── productController.js

├── models/

│ └── productModel.js

├── middleware/

│ └── validate.js

└── server.js

```

---

## ⚡ API Endpoints

### Product Routes

| Method | Endpoint              | Description        |
| :----- | :-------------------- | :----------------- |
| GET    | `/api/products`       | Get all products   |
| GET    | `/api/products/:id`   | Get product by ID  |
| POST   | `/api/products`       | Create new product |
| PUT    | `/api/products/:id`   | Update product     |
| DELETE | `/api/products/:id`   | Delete product     |

---

## ▶️ Getting Started

### 1. Clone the repository

```bash
git clone [https://github.com/mahawarkhushi/E-commerce-.git](https://github.com/mahawarkhushi/E-commerce-.git)
cd E-commerce-/Backend

```

### 2. Install dependencies

Bash

```
npm install

```

### 3. Setup environment variables

Create a `.env` file in the `Backend` directory and add the following:

Code snippet

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/ecommerce

```

### 4. Run the server

Bash

```
npm run dev

```

----------

## 🧪 Testing

Use Postman or a similar API client to test the routes.

**Example: Create a new product**

-   **Method**: `POST`
    
-   **URL**: `/api/products`
    
-   **Headers**: `Content-Type: application/json`
    
-   **Body**:
    

JSON

```
{
  "name": "iPhone 15",
  "price": 120000,
  "category": "Mobiles",
  "inStock": true
}

```

----------
