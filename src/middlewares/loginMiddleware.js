const Joi = require('joi');

const USER = Joi.object({
  // fonte: https://stackoverflow.com/questions/57972358/joi-email-validation
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: Joi.string().min(6).required(),
});

module.exports = (req, res, next) => {
  const { error } = USER.validate(req.body);
  if (error) return next({ statusCode: 400, message: 'Some required fields are missing' });
  return next();
};