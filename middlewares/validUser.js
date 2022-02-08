const jwt = require('jsonwebtoken');

const validUser = async (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(400).json(
      { message: '"displayName" length must be at least 8 characters long' },
    );
  }
  next();
};

const validEmail = async (req, res, next) => {
  const { email } = req.body;
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!email) return res.status(400).json({ message: '"email" is required' });
  if (regex.test(email)) return next();
  return res.status(400).json({ message: '"email" must be a valid email' });
};

const validPassword = async (req, res, next) => {
  const { password } = req.body;
  if (!password) return res.status(400).json({ message: '"password" is required' });
  if (password.length === 6) {
    return next();
  }
  return res.status(400).json({ message: '"password" length must be 6 characters long' });
};

const validToken = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  try {
    jwt.verify(authorization, 'trybe');
    next();
  } catch (_) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validToken,
  validUser,
  validEmail,
  validPassword,
};
