'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.Role, {
        foreignKey: 'id',
        type: DataTypes.UUID
      });
      this.hasMany(models.Post, {
        as: 'posts',
        foreignKey: 'author'
      });
      this.hasMany(models.Comment, {
        as: 'comments',
        foreignKey: 'author'
      })
    }
  };
  User.init({
    lastname: DataTypes.STRING,
    firstname: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    githubUrl: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};