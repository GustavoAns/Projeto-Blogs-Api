module.exports = (sequelize, DataTypes) => {
  const PostCategorie = sequelize.define('PostCategorie', {
    categoryId: DataTypes.INTEGER,
  }, {
    timestamps: false,
    tableName: 'PostsCategories',
  });
  
  PostCategorie.associate = (models) => {
    PostCategorie.belongsTo(models.Categorie);
  };

  return PostCategorie;
};