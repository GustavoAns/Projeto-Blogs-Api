const jwt = require('jsonwebtoken');

const validName = async (req, res, next) => {
  const { name } = req.body;
  if (!name || name === undefined) return res.status(400).json({ message: '"name" is required' });
  return next();
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
  validName,
};
