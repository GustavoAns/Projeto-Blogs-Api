const jwt = require('jsonwebtoken');

const validBody = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title) return res.status(400).json({ message: '"title" is required' });
  if (!content) return res.status(400).json({ message: '"content" is required' });
  if (!categoryIds) return res.status(400).json({ message: '"categoryIds" is required' });
  next();
};

const validToken = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  try {
    const { id } = jwt.verify(authorization, 'trybe');
    req.user = id;
    next();
  } catch (_) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validToken,
  validBody,
};
