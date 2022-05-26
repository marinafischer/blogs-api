const express = require('express');
const controller = require('../controllers');
const middleware = require('../middlewares');

const userRouter = express.Router();

userRouter.post('/', controller.user);
userRouter.get('/:id', middleware.authentication, controller.getUserById);
userRouter.get('/', middleware.authentication, controller.getUser);
userRouter.delete('/me', 
middleware.authentication,
controller.deleteUser);

module.exports = userRouter;