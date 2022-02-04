const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {
  const product = await User.create({ displayName, email, password, image });
  return product;
};

module.exports = {
  createUser,
};
