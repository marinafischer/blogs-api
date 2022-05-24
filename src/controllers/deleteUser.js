const deleteUser = require('../services/deleteUser');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.user;
    await deleteUser(id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};