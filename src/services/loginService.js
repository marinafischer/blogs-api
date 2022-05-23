const { User } = require('../database/models');
const getToken = require('../helpers/getToken');

module.exports = async ({ email, password }) => {
  if (!email || !password) {
    return { statusCode: 400, message: 'Some required fields are missing' };
  }

  const getUser = await User.findOne({ where: { email } });
  if (!getUser || getUser.password !== password) {
    return { statusCode: 400, message: 'Invalid fields' };
  }
  
  const token = getToken({
    id: getUser.id,
    displayName: getUser.displayName,
    email,
    image: getUser.image,
  });
  return { token };
};