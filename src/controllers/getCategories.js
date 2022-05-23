const getCategories = require('../services/getCategories');

module.exports = async (req, res, _next) => {
  const categories = await getCategories();
  res.status(200).json(categories);
};