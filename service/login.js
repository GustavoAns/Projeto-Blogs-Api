const jwt = require('jsonwebtoken');
const { User } = require('../models');

const emailExist = async (email, password) => {
  const emailFind = await User.findOne({
    where: {
      email,
    },
  });
  if (emailFind === null) return null;
  if (emailFind.dataValues.password === password) {
    const token = jwt.sign(emailFind.dataValues, 'trybe', {
      algorithm: 'HS256',
    });
    return { token };
  }
  return null;
};

module.exports = {
  emailExist,
};
