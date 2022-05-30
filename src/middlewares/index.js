const error = require('./error');
const authentication = require('./authentication');
const authorAuth = require('./authorAuth');
const categoryMiddleware = require('./categoryMiddleware');
const postMiddleware = require('./postMiddleware');
const userMiddleware = require('./userMiddleware');
const editPostMiddleware = require('./editPostMiddleware');
const loginMiddleware = require('./loginMiddleware');

module.exports = {
  error,
  authentication,
  authorAuth,
  categoryMiddleware,
  postMiddleware,
  userMiddleware,
  editPostMiddleware,
  loginMiddleware,
};
