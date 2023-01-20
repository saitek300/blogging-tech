const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Comment extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Comment.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    body:{
        type: DataTypes.STRING,
        allowNull: false,

    },
    date:{
      type: DataTypes.DATE,
      allowNull: false,
    },
    post_id:{
        type:DataTypes.INTEGER,
        references:{
            model:'post',
            key:'id',
        },

    },
    user_id:{
        type: DataTypes.INTEGER,
        references:{
            model: 'user',
            key: 'id',
        },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;