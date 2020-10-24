const express = require('express');
const router = express.Router();
const controller = require("../controllers/userViewController.js");

router.post('/addViewProduct', controller.addViewProduct);
router.get('/getUserViewProduct', controller.getUserViewProduct);

module.exports = router;