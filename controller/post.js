const postService = require('../service/post');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  // console.log(req.user);
  const userId = req.user;
  const product = await postService.createPost({ title, content, categoryIds, userId });
  return res.status(201).json(product);
};

const validCategory = async (req, res, next) => {
  const { categoryIds } = req.body;
  
  const coutCategory = await postService.validCategory(categoryIds);

  // return res.status(201).json(coutCategory);
  console.log(coutCategory === categoryIds.length);
  console.log(coutCategory !== categoryIds.length);
  if (coutCategory === categoryIds.length) return next();
  if (coutCategory !== categoryIds.length) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  } 
};

module.exports = {
  createPost,
  validCategory,
};
