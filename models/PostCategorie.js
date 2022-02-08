module.exports = (sequelize, DataTypes) => {
  const PostCategorie = sequelize.define('PostCategorie', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    timestamps: false,
    tableName: 'PostsCategories',
  });
  PostCategorie.associate = (models) => {
    models.Categorie.belongsToMany(models.Blogpost,
      { through: PostCategorie, foreignKey: 'categoryId', otherKey: 'postId', as: 'blogPost' });
    models.Blogpost.belongsToMany(models.Categorie,
      { through: PostCategorie, foreignKey: 'postId', otherKey: 'categoryId', as: 'categories' });
  };

  return PostCategorie;
};