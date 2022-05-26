const getPosts = require('../services/getPosts');

module.exports = async (req, res, next) => {
  try {
    const posts = await getPosts();
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};