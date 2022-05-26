const express = require('express');
const postRoute = require('./postRoute');
const categoriesRoute = require('./categoriesRoute');
const userRoute = require('./userRoute');

const router = express.Router();

router.use('/user', userRoute);
router.use('/categories', categoriesRoute);
router.use('/post', postRoute);

module.exports = router;