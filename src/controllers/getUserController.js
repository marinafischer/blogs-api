const getAll = require('../services/getAllUserService');

module.exports = async (req, res, _next) => {
  const users = await getAll();
  res.status(200).json(users);
};