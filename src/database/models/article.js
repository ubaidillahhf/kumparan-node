'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Article.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    author: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    title: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    body: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'created_at',
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'updated_at',
    },
    deletedAt: {
      allowNull: true,
      type: DataTypes.DATE,
      field: 'deleted_at',
    },
  }, {
    sequelize,
    modelName: 'Articles',
    tableName: 'articles',
    underscored: true,
    freezeTableName: true,
  });
  return Article;
};