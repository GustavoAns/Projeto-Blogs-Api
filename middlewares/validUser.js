const validUser = async (req, res, next) => {
  const { displayName } = req.body;
  console.log(displayName.length);
  if (displayName.length >= 8) {
    next();
  }
  return res.status(400).json({ message: 'displayName dever ser maior doque 7 caracteres' });
};

module.exports = {
  validUser,
};
