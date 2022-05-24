const { BlogPost } = require('../database/models');

module.exports = async (id) => {
  await BlogPost.destroy({ where: { id } });
};