const jwt = require('jsonwebtoken');
const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {
  await User.create({ displayName, email, password, image });
  const token = jwt.sign({ displayName, email, password, image }, 'trybe', {
    algorithm: 'HS256',
  });
  return token;
};

const emailExist = async (email) => {
  const emailsCount = await User.count({
    where: {
      email,
    },
  });
  return emailsCount;
};

const getAll = async () => {
  const users = await User.findAll();
  return users;
};

module.exports = {
  getAll,
  createUser,
  emailExist,
};
