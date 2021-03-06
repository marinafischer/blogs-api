const { BlogPost, User, Category } = require('../database/models');

module.exports = async () => {
  const post = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category,
          as: 'categories',
          through: { attributes: [] },
      },
    ],
  });
  return post;
};