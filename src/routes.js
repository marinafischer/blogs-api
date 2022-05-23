const login = require('./controllers/loginController');
const user = require('./controllers/createUserController');
const getUser = require('./controllers/getUserController');
const getUserById = require('./controllers/getUserById');
const category = require('./controllers/category');
const getCategories = require('./controllers/getCategories');

module.exports = {
  login,
  user,
  getUser,
  getUserById,
  category,
  getCategories,
};