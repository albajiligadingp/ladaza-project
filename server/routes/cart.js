const express = require('express');
const router = express.Router()
const { addItemToCart } = require('../controllers/cart');
const { requireSignin, userMiddleware } = require('../middlewares');

router.post('/user/cart/addtocart', requireSignin, userMiddleware, addItemToCart);

module.exports = router