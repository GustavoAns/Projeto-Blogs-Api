const userService = require('../service/user');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const product = await userService.createUser({ displayName, email, password, image });
  return res.status(201).json(product);
};

const emailExist = async (req, res, next) => {
  const { email } = req.body;
  const emailsCount = await userService.emailExist(email);
  if (emailsCount > 0) return res.status(409).json({ message: 'User already registered' });
  return next();
};

module.exports = {
  createUser,
  emailExist,
};
