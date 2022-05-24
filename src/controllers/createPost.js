const create = require('../services/createPost');

module.exports = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const postData = req.body;
    const post = await create(userId, postData);
    if (post.statusCode) return next(post);
    return res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};