const express = require('express');
const router = express.Router();
const { getHomePage, getABC, getsample, postCreateUser } = require('../controllers/homeController')

router.get('/', getHomePage);

router.get('/abc', getABC);

router.get('/test', getsample);

router.post('/create-user', postCreateUser);

module.exports = router;