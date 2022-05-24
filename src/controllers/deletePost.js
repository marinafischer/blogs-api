const deletePost = require('../services/deletePost');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    await deletePost(id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};