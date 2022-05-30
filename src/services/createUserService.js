const { User } = require('../database/models');
const getToken = require('../helpers/getToken');

module.exports = async (user) => {
   const getUser = await User.findOne({ where: { email: user.email } });
  if (getUser) {
    return { statusCode: 409, message: 'User already registered' };
  }
  const { id } = await User.create(user);
  const data = { id, displayName: user.displayName, email: user.email, image: user.image };
  return getToken(data);
};