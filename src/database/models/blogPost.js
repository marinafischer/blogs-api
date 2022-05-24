const { date } = require('joi');

const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define("BlogPost", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    createdAt: {type:DataTypes.DATE, defaultValue:Date.now(), field:'published'},
    updatedAt: {type:DataTypes.DATE, defaultValue:Date.now(), field: 'updated'},
  }, 
  {
    timestamps: false,
  }
  );
  BlogPost.associate=(models)=>{
    BlogPost.belongsTo(models.User,
      {
        foreingKey: 'userId',
        as: 'user'
      }
    );
  };
  return BlogPost;
};

module.exports = BlogPost;