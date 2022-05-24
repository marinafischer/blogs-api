const { BlogPost, User, Category } = require('../database/models');

module.exports = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    attributes: { exclude: ['UserId'] },
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
