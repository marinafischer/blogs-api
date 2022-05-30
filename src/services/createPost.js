const { Op } = require('sequelize');
const { Category, BlogPost, PostCategory } = require('../database/models');

const findCategory = async (categoriesId) => {
  // fonte: https://sequelize.org/docs/v6/core-concepts/model-querying-finders/#findandcountall
  const { rows } = await Category.findAndCountAll({
    where: {
      id: {
        [Op.in]: categoriesId,
      },
    },
  });
  return rows;
};

const insertPostCategory = async (categories, postId) => {
  const data = categories.map((category) => ({ postId, categoryId: category.id }));
  await PostCategory.bulkCreate(data);
};

module.exports = async (userId, postData) => {
  const categories = await findCategory(postData.categoryIds);
  if (categories.length === 0) return { statusCode: 400, message: '"categoryIds" not found' };
  
  const { id, createdAt, updatedAt } = await BlogPost.create(
    { title: postData.title, content: postData.content, userId },
  );
  
  await insertPostCategory(categories, id);

  const createdPost = {
    id,
    title: postData.title,
    content: postData.content,
    userId,
    updated: Date(updatedAt),
    published: Date(createdAt),
  };

  return createdPost;
};