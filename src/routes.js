const login = require('./controllers/loginController');
const user = require('./controllers/createUserController');
const getUser = require('./controllers/getUserController');
const getUserById = require('./controllers/getUserById');

module.exports = {
  login,
  user,
  getUser,
  getUserById,
};