const { Op } = require('sequelize');
const { BlogPost, User, Category } = require('../database/models');

const find = async (q, attribute) => {
  const { rows } = await BlogPost.findAndCountAll({
    where: {
      [attribute]: {
        [Op.like]: `%${q}%`,
      },
    },
    attributes: { exclude: ['UserId'] },
    include: [
          { model: User, as: 'user', attributes: { exclude: ['password'] } },
          { model: Category,
              as: 'categories',
              through: { attributes: [] },
          },
        ],
  });
  return rows;
}; 

module.exports = async (q) => {
  const findByTitle = await find(q, 'title');
  const findByContent = await find(q, 'content');
  return [...findByTitle, ...findByContent];
};
