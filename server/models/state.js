'use strict';
const { Model } = require('sequelize');
const sequelize = require('../config/db')

module.exports = (sequelize, DataTypes) => {
  class State extends Model {
    static associate(models) {
      // Define associations here
      this.hasMany(models.City,{foreignKey: 'stateId'})
    }
  }

  State.init({
    id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
     type:  DataTypes.STRING,
    },
    abbreviation:{
     type: DataTypes.STRING
    }
   
  }, {
    sequelize,
    tableName:'states',
    modelName: 'State',
  });

  return State;
};
