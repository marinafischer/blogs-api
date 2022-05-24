const Joi = require('joi');
const { BlogPost } = require('../database/models');
const getPost = require('./getPost');

const POST = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
});

module.exports = async (postData, id) => {
  const { error } = POST.validate(postData);
  if (error) return { statusCode: 400, message: 'Some required fields are missing' };
  
  await BlogPost.update(postData, { where: { id } });
  const post = getPost(id);
  
  return post;
};