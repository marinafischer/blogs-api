const searchPost = require('../services/searchPost');

module.exports = async (req, res, next) => {
  try {
    const { q } = req.query;
    const post = await searchPost(q);
    console.log(post);
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};