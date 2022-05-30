const { BlogPost } = require('../database/models');
const getPost = require('./getPost');

module.exports = async (postData, id) => {
  await BlogPost.update(postData, { where: { id } });
  const post = getPost(id);
  
  return post;
};