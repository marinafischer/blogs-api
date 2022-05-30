const Joi = require('joi');

const USER = Joi.object({
  displayName: Joi.string().min(8).required(),
  // fonte: https://stackoverflow.com/questions/57972358/joi-email-validation
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: Joi.string().min(6).required(),
  image: Joi.string().required(),
});

module.exports = (req, res, next) => {
  const { error } = USER.validate(req.body);
  if (error) return next(error);
  return next();
};