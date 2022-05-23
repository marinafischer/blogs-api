const jwt = require('jsonwebtoken');

module.exports = (data) => {
  const secret = process.env.JWT_SECRET;
  const jwtConfig = {
    expiresIn: '5h',
    algorithm: 'HS256',
  };
  return jwt.sign({ data }, secret, jwtConfig);
};