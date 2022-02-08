const categorieService = require('../service/categorie');

const createCategorie = async (req, res) => {
  const { name } = req.body;
  const product = await categorieService.createCategorie(name);
  return res.status(201).json(product);
};

const getAll = async (_req, res) => {
  const categories = await categorieService.getAll();
  return res.status(200).json(categories);
};

module.exports = {
  createCategorie,
  getAll,
};
