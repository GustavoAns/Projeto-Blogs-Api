module.exports = (sequelize, DataTypes) => {
  const Blogpost = sequelize.define('Blogpost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'BlogPosts',
  });

  Blogpost.associate = (models) => {
    Blogpost.belongsTo(models.User);
  };

  return Blogpost;
};