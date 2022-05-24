const editPost = require('../services/editPost');

module.exports = async (req, res, next) => {
  try {
    const data = req.body;
    const { id } = req.params;
    const updatePost = await editPost(data, id);
    if (updatePost.statusCode) return next(updatePost);
    res.status(200).json(updatePost);
  } catch (error) {
    next(error);
  }
};