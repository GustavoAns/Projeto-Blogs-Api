const userService = require('../service/user');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const product = await userService.createUser({ displayName, email, password, image });
  return res.status(201).json(product);
};

module.exports = {
  createUser,
};
