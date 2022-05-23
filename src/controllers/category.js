const createCategory = require('../services/category');

module.exports = async (req, res, next) => {
  try {
    const data = req.body;
    const category = await createCategory(data);
    res.status(201).json(category);
  } catch (error) {
    next(error);
  }
};