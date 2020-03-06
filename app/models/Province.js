const { DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

const Province = sequelize.define('Province', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Province', // We need to choose the model name
  tableName: 'province'
});

module.exports = Province;