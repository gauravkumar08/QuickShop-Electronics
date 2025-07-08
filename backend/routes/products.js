const express = require('express');
const router = express.Router();

// Sample Products (can replace with MongoDB later)
const products = [
  {
    id: 1,
    name: 'OnePlus 11R 5G',
    price: 39999,
    image: '/frontend/one_plus.png'
  },
  {
    id: 2,
    name: 'Dell Inspiron 15',
    price: 56999,
    image: 'https://example.com/dell.jpg'
  }
];

// GET /api/products
router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;
