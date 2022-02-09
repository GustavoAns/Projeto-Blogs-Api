// const jwt = require('jsonwebtoken');
const { Blogpost, Categorie, User } = require('../models');

const createPost = async ({ title, content, userId }) => {
  const newPost = await Blogpost.create({ title, content, userId });
  const { id } = newPost.dataValues;
  return { id, userId, title, content };
};

const validCategory = async (categoryIds) => {
  let acumulador = 0;
  await Promise.all(
    categoryIds.map(async (id) => {
      const countId = await Categorie.count({
        where: {
          id,
        },
      });
      acumulador += countId;
    }),
  );
  return acumulador;
  // const cate = await Categorie.count({
  //   where: {
  //     id: category,
  //   },
  // });
  // return cate;
};

const getAll = async () => {
  const posts = await Blogpost.findAll({ include: [
      { model: User, as: 'user' },
      { model: Categorie, as: 'categories', through: { attributes: [] } },
  ] });
  return posts;
};

module.exports = {
  createPost,
  validCategory,
  getAll,
};
