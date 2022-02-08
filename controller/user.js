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

const getAll = async (_req, res) => {
  const users = await userService.getAll();
  return res.status(200).json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getById(id);
  if (user === null) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(user);
};

module.exports = {
  getAll,
  createUser,
  emailExist,
  getById,
};
