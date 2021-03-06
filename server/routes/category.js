const express = require('express');
const router = express.Router()
const { addCategory, getCategories } = require('../controllers/category');
const { requireSignin, adminMiddleware } = require('../middlewares');

router.post('/category/create', requireSignin, adminMiddleware, addCategory);
router.get('/category/getcategory', getCategories);

module.exports = router