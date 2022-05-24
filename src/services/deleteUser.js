const { User } = require('../database/models');

module.exports = async (id) => {
  await User.destroy({ where: { id } });
};