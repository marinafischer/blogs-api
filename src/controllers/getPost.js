const getPost = require('../services/getPost');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await getPost(id);
    if (!post) next({ statusCode: 404, message: 'Post does not exist' });
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};