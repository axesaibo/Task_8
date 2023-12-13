const express = require('express');
const router = express.Router();


const products = [
    { id: 1, name: 'Product 1', price: 25 },
    { id: 2, name: 'Product 2', price: 30 },
    { id: 3, name: 'Product 3', price: 40 }
];


router.get('/products', (req, res) => {
    res.json(products);
});


router.post('/cart/add/:productId', authenticateUser, (req, res) => {
    
});


router.get('/products/:id', (req, res) => {
    
});

module.exports = router;
