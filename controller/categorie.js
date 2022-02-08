const categorieService = require('../service/categorie');

const createCategorie = async (req, res) => {
  const { name } = req.body;
  const product = await categorieService.createCategorie(name);
  return res.status(201).json(product);
};

module.exports = {
  createCategorie,
};
