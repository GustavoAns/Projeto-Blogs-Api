// const jwt = require('jsonwebtoken');
const { Categorie } = require('../models');

const createCategorie = async (name) => {
  const categorie = await Categorie.create({ name });
  console.log(categorie);
  const data = categorie.dataValues;
  return data;
};

module.exports = {
  createCategorie,
};
