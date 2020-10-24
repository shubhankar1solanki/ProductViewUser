const express = require('express');
const router = express.Router();
const products = require('./products');

router.use('/product', products);

// router.use(auth);
module.exports = router;
