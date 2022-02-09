const postService = require('../service/post');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const userId = req.user;
  const product = await postService.createPost({ title, content, categoryIds, userId });
  return res.status(201).json(product);
};

const validCategory = async (req, res, next) => {
  const { categoryIds } = req.body;
  
  const coutCategory = await postService.validCategory(categoryIds);

  if (coutCategory === categoryIds.length) return next();
  if (coutCategory !== categoryIds.length) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  } 
};

const getAll = async (_req, res) => {
  const product = await postService.getAll();
  return res.status(200).json(product);
};

module.exports = {
  createPost,
  validCategory,
  getAll,
};
