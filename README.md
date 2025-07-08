# ⚡ QuickShop Electronics 

QuickShop Electronics is a modern, full-stack e-commerce application built using the MERN (MongoDB, Express, React [HTML/JS in your case], Node.js) stack. It supports product catalog browsing, search functionality, cart state management, and secure checkout using PayPal integration.

## 📌 Features

- 🔍 Product catalog with category-based filtering (Mobile, Laptop, etc.)
- 📦 Shopping cart with local storage state management
- 🧾 Dynamic checkout with real-time item tracking
- 💳 PayPal payment integration (Sandbox support)
- 🖼️ Image management for product visuals
- ❌ Product delete option in cart
- ⚙️ Backend with Express.js and MongoDB (Atlas support)
- 💡 Responsive UI with clean UX


## 🚀 Tech Stack

| Frontend      | Backend       | Database   | Payment         |
|---------------|---------------|------------|-----------------|
| HTML5, CSS3, JS | Node.js, Express | MongoDB Atlas | PayPal Sandbox  |


## 🗂️ Project Structure

QuickShop/
├── backend/                  # Node.js + Express + MongoDB
│   ├── server.js
│   └── .env
│
├── frontend/                 # Static frontend served by Express
│   ├── index.html
│   ├── cart.html
│   ├── checkout.html
│   ├── style.css
│   ├── js/
│   │   ├── app.js           # Handles product listing & search
│   │   ├── cart.js          # Manages shopping cart
│   │   └── checkout.js      # PayPal integration logic
│   └── images/
│       ├── one_plus.png
│       └── laptop.webp
│       ├── watch.webp
│       ├── headphone.webp
│       ├── tv.webp

## ⚙️ Setup Instructions

### 1. 📥 Clone the Repository

```bash
git clone https://github.com/gauravkumar08/quickshop-electronics.git
cd quickshop-electronics



