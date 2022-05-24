const login = require('./controllers/loginController');
const user = require('./controllers/createUserController');
const getUser = require('./controllers/getUserController');
const getUserById = require('./controllers/getUserById');
const category = require('./controllers/category');
const getCategories = require('./controllers/getCategories');
const createPost = require('./controllers/createPost');
const getPost = require('./controllers/getPost');
const getPosts = require('./controllers/getPosts');

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
};