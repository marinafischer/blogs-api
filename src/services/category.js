const Joi = require('joi');
const { Category } = require('../database/models');

const CATEGORY = Joi.object({
  name: Joi.string().required(),
});

module.exports = async (data) => {
  const { error } = CATEGORY.validate(data);
  if (error) throw error;
  const { id } = await Category.create(data);
  return { id, ...data };
};