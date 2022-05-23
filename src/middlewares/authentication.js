const senha = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) next({ statusCode: 401, message: 'Token not found' });
  try {
    const decoded = jwt.verify(authorization, senha);
    req.user = decoded.data;
    next();
  } catch (error) {
    next({ statusCode: 401, message: 'Expired or invalid token' });
  }
};