const loginService = require('../service/login');

const emailExist = async (req, res) => {
  const { email, password } = req.body;
  const emailFind = await loginService.emailExist(email, password);
  // console.log(emailFind);
  if (emailFind === null) return res.status(400).json({ message: 'Invalid fields' });
  return res.status(200).json(emailFind);
};

module.exports = {
  emailExist,
};
