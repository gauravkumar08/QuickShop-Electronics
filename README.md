# ⚡ QuickShop Electronics 

QuickShop Electronics is a modern, full-stack e-commerce application built using the MERN (MongoDB, Express, React [HTML/JS in your case], Node.js) stack. It supports product catalog browsing, search functionality, cart state management, and secure checkout using PayPal integration.

## 📌 Features

- 🔍 Product catalog with category-based filtering (Mobile, Laptop, etc.)
- 📦 Shopping cart with local storage state management
- 🧾 Dynamic checkout with real-time item tracking
- 💳 PayPal payment integration (Sandbox support)
- ❌ Product delete option in cart
- ⚙️ Backend with Express.js and MongoDB (Atlas support)
- 💡 Responsive UI with clean UX


## 🚀 Tech Stack

| Frontend      | Backend       | Database   | Payment         |
|---------------|---------------|------------|-----------------|
| HTML5, CSS3, JS | Node.js, Express | MongoDB Atlas | PayPal Sandbox  |

## Installation

1. Install dependencies:

   ```bash
   npm init -y
   npm install express mongoose dotenv

2. Setup MongoDB:

   ```bash
   PORT=5000
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/quickshop

3. Start the server:
   
   ```bash
   cd backend
   node server.js

4. Open your browser and visit:
   
   ```bash
   http://localhost:5000

# Paypal Sandbox SetUp

Go to: [PayPal Developer Console](https://developer.paypal.com/home/)

Create a Sandbox Business Account

Get your Client ID

Replace in checkout.html






