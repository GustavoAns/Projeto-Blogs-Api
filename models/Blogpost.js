module.exports = (sequelize, DataTypes) => {
  const Blogpost = sequelize.define('Blogpost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    timestamps: false,
    tableName: 'BlogPosts',
  });

  Blogpost.associate = (models) => {
    Blogpost.belongsTo(models.User, {
      as: 'user',
    });
  };

  return Blogpost;
};