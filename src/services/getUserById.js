const { User } = require('../database/models');

module.exports = async (id) => {
  const getUser = await User.findOne({ 
    where: { id }, 
    attributes: { exclude: ['password'] } });
  return getUser;
};