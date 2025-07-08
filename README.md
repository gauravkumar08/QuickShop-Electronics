# ⚡ QuickShop Electronics 

**QuickShop Electronics** is a modern, full-stack e-commerce application built using the MERN (MongoDB, Express, React [HTML/JS in your case], Node.js) stack. It supports product catalog browsing, search functionality, cart state management, and secure checkout using **PayPal integration(SandBox)**.

## 📌 Features

- 🔍 Product catalog with category-based filtering (Mobile, Laptop, etc.)
- 📦 Shopping cart with local storage state management
- 🧾 Dynamic checkout with real-time item tracking
- 💳 PayPal payment integration (Sandbox support)
- 🖼️ Image management for product visuals
- ❌ Product delete option in cart
- ⚙️ Backend with Express.js and MongoDB (Atlas support)
- 💡 Responsive UI with clean UX

## 🧰 Technologies Used

### 🔙 Backend
- **Node.js** – JavaScript runtime environment to build server-side logic
- **Express.js** – Lightweight web framework for handling API routes and serving static frontend
- **MongoDB Atlas** – Cloud-based NoSQL database to store products and cart info
- **Mongoose** – Object Data Modeling (ODM) library to interact with MongoDB using schemas
- **dotenv** – To manage environment variables securely (e.g. MongoDB URI, Port)

### 🎨 Frontend
- **HTML5** – Structure of all web pages (`index.html`, `cart.html`, `checkout.html`)
- **CSS3** – Styling the layout, responsiveness, and modern UI
- **JavaScript** – For handling interactivity like cart updates, filtering, search, etc.

### 💰 Payments
- **PayPal SDK** – Integrated payment gateway using PayPal Sandbox for secure transactions

### 🖼️ Static Assets
- **Images Folder** – All product images stored inside `frontend/images/`

## Installation

1. Install dependencies:

   ```bash
   npm init -y
   npm install express mongoose dotenv

2. Setup MongoDB Atlas :

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

# Results

![image](https://github.com/user-attachments/assets/7391d490-b0f5-4adb-9b80-d7a9f2f3a3a8)

![image](https://github.com/user-attachments/assets/4cbd9a59-1b53-4925-871a-f1efa676e0c2)

![image](https://github.com/user-attachments/assets/7867e6bd-47fe-44f3-a956-4d2da55eba70)

![image](https://github.com/user-attachments/assets/05ae08d6-4699-4bd5-a7ec-2bc5a60aef7c)













