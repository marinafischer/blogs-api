const Joi = require('joi');

const CATEGORY = Joi.object({
  name: Joi.string().required(),
});

module.exports = (req, res, next) => {
  const { error } = CATEGORY.validate(req.body);
  if (error) next(error);
  return next();
};