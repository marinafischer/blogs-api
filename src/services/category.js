const { Category } = require('../database/models');

module.exports = async (data) => {
  const { id } = await Category.create(data);
  return { id, ...data };
};