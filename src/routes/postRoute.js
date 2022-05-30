const express = require('express');
const controller = require('../controllers');
const middleware = require('../middlewares');

const postRouter = express.Router();
postRouter.post('/', 
  middleware.authentication, middleware.postMiddleware, controller.createPost);
postRouter.get('/', middleware.authentication, controller.getPosts);
postRouter.get('/search', middleware.authentication, controller.searchPost);
postRouter.get('/:id', middleware.authentication, controller.getPost);

postRouter.put('/:id', 
  middleware.authentication,
  middleware.authorAuth,
  middleware.editPostMiddleware,
  controller.editPost);

  postRouter.delete('/:id', 
middleware.authentication,
middleware.authorAuth,
controller.deletePost);

module.exports = postRouter;