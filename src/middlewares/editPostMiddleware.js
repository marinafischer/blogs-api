const Joi = require('joi');

const POST = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
});

module.exports = (req, res, next) => {
  const { error } = POST.validate(req.body);
  if (error) return next({ statusCode: 400, message: 'Some required fields are missing' });
  return next();
};