// const jwt = require('jsonwebtoken');
const { Blogpost, Categorie } = require('../models');

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

module.exports = {
  createPost,
  validCategory,
};