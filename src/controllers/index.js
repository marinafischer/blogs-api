const login = require('./loginController');
const user = require('./createUserController');
const getUser = require('./getUserController');
const getUserById = require('./getUserById');
const category = require('./category');
const getCategories = require('./getCategories');
const createPost = require('./createPost');
const getPost = require('./getPost');
const getPosts = require('./getPosts');
const editPost = require('./editPost');
const deletePost = require('./deletePost');
const deleteUser = require('./deleteUser');
const searchPost = require('./searchPost');

module.exports = {
  login,
  user,
  getUser,
  getUserById,
  category,
  getCategories,
  createPost,
  getPost,
  getPosts,
  editPost,
  deletePost,
  deleteUser,
  searchPost,
};