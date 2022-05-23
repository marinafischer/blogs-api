const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define("PostCategory", 
  {},
  {
    timestamps: false,
  });

  return PostCategory;
};

module.exports = PostCategory;