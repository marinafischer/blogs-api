const getPost = require('../services/getPost');

module.exports = async (req, res, next) => {
  const { user } = req;
  const { id } = req.params;
  const post = await getPost(id);
  if (!post) return next({ statusCode: 404, message: 'Post does not exist' });
  if (post.userId !== user.id) {
    return next({ statusCode: 401, message: 'Unauthorized user' });
  } 
  return next();
};