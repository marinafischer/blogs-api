const { User } = require('../database/models');

module.exports = async () => {
  const getUsers = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return getUsers;
};