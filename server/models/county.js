'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class County extends Model {
    static associate(models) {
      // Define associations here
      this.belongsTo(models.City,{foreignKey:'cityId'})
      this.hasMany(models.DropOff,{foreignKey: 'countyId'})
      this.hasMany(models.MicroHauler,{foreignKey: 'countyId'})
      this.hasMany(models.SmartBin,{foreignKey: 'countyId'})
    }
  }

  County.init({
    id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey:true,
      type: DataTypes.INTEGER,
    },
    name: {
     type:  DataTypes.STRING,
    },
   
    pickUp:{
      type:DataTypes.STRING,
    },
    comLaw:{
        type: DataTypes.BOOLEAN
    },
    resLaw:{
        type: DataTypes.BOOLEAN
    },
    //start of daraus code
    city:{
      type:DataTypes.STRING,
    },
    state:{
      type:DataTypes.STRING,
    }
   
  }, {
    sequelize,
    tableName: 'counties',
    modelName: 'County',
    timestamps:false
  });

  return County;
};
