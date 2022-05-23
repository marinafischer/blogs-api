const getUser = require('../services/getUserById');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await getUser(id);
    if (!user) next({ statusCode: 404, message: 'User does not exist' });
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};