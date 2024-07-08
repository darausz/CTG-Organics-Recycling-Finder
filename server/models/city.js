'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate(models) {
      // Define associations here
      this.belongsTo(models.State, {foreignKey: 'stateId'})
      this.hasMany(models.County,{foreignKey: 'cityId'})
    }
  }

  City.init({
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
    name: {
     type:  DataTypes.STRING,
    },
    stateId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'states',
            key: 'id'
        }
    },
  
  }, {
    sequelize,
    tableName: 'cities',
    modelName: 'City',
    timestamps:false
  });

  return City;
};
