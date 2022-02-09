module.exports = (sequelize, DataTypes) => {
  const Categorie = sequelize.define('Categorie', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Categories',
  });

  // Categorie.associate = (models) => {
  //   Categorie.hasMany(models.PostCategorie);
  // };

  return Categorie;
};