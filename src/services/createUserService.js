const jwt = require('jsonwebtoken');
const Joi = require('joi');
const { User } = require('../database/models');

const USER = Joi.object({
  displayName: Joi.string().min(8).required(),
  // fonte: https://stackoverflow.com/questions/57972358/joi-email-validation
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password: Joi.string().min(6).required(),
  image: Joi.string().required(),
});

const getToken = (data) => {
  const secret = process.env.JWT_SECRET;
  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };
  return jwt.sign({ data }, secret, jwtConfig);
};

module.exports = async (user) => {
  const { error } = USER.validate(user);
  if (error) throw error;
  const getUser = await User.findOne({ where: { email: user.email } });
  if (getUser) {
    return { statusCode: 409, message: 'User already registered' };
  }
  const { id } = await User.create(user);
  const data = { id, displayName: user.displayName, email: user.email, image: user.image };
  return getToken(data);
};