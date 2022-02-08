// const jwt = require('jsonwebtoken');
const { Categorie } = require('../models');

const createCategorie = async (name) => {
  const categorie = await Categorie.create({ name });
  console.log(categorie);
  const data = categorie.dataValues;
  return data;
};

const getAll = async () => {
  const users = await Categorie.findAll();
  return users;
};

module.exports = {
  createCategorie,
  getAll,
};
