const validEmail = async (req, res, next) => {
  const { email } = req.body;
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (email === undefined) return res.status(400).json({ message: '"email" is required' });
  if (email.length === 0) {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  } 
  if (regex.test(email)) return next();
  return res.status(400).json({ message: '"email" must be a valid email' });
};

const validPassword = async (req, res, next) => {
  const { password } = req.body;
  if (password === undefined) return res.status(400).json({ message: '"password" is required' });
  if (password.length === 0) {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  } 
  return next();
};

module.exports = {
  validEmail,
  validPassword,
};
