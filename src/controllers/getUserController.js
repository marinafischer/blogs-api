const getAll = require('../services/getAllUserService');

module.exports = async (req, res, _next) => {
  console.log(req.user);
  const users = await getAll();
  res.status(200).json(users);
};