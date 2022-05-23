const login = require('./controllers/loginController');
const user = require('./controllers/createUserController');
const getUser = require('./controllers/getUserController');

module.exports = {
  login,
  user,
  getUser,
};