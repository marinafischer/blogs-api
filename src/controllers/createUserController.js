const createUser = require('../services/createUserService');

module.exports = async (req, res, next) => {
  try {
    const newUserToken = await createUser(req.body);
    if (newUserToken.statusCode) next(newUserToken);
    res.status(201).json({ token: newUserToken });
  } catch (error) {
    next(error);
  }
};