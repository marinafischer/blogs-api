const express = require('express');
const controller = require('../controllers');
const middleware = require('../middlewares');

const categoriesRouter = express.Router();

categoriesRouter.post('/', 
  middleware.authentication, middleware.categoryMiddleware, controller.category);
categoriesRouter.get('/', middleware.authentication, controller.getCategories);

module.exports = categoriesRouter;