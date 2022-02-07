const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {
  const product = await User.create({ displayName, email, password, image });
  return product;
};

const emailExist = async (email) => {
  const emailsCount = await User.count({
    where: {
      email,
    },
  });
  return emailsCount;
};

module.exports = {
  createUser,
  emailExist,
};
