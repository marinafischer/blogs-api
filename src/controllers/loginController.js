const login = require('../services/loginService');

module.exports = async (req, res, next) => {
  try {
    const token = await login(req.body);
    if (token.statusCode) next(token);
    return res.status(200).json(token);
  } catch (error) {
    next(error);
  }
};