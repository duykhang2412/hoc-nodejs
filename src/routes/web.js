const express = require('express');
const router = express.Router();
const { getHomePage, getABC, getsample } = require('../controllers/homeController')

router.get('/', getHomePage);

router.get('/abc', getABC);

router.get('/test', getsample);

module.exports = router;