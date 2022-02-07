module.exports = (sequelize, DataTypes) => {
  const Categorie = sequelize.define('Categorie', {
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Categories',
  });

  Categorie.associate = (models) => {
    Categorie.hasMany(models.PostCategorie);
  };

  return Categorie;
};