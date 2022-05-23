const { Category } = require('../database/models');

module.exports = async () => {
  const categories = await Category.findAll();
  return categories;
};