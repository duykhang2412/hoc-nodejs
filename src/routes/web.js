const express = require('express');
const router = express.Router();
const { getHomePage, getABC, getsample } = require('../controllers/homeController')

router.get('/', getHomePage);

router.get('/', getABC);

router.get('/', getsample);

module.exports = router;