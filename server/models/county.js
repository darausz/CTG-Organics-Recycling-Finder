'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class County extends Model {
    static associate(models) {
      // Define associations here
      this.belongsTo(models.City,{foreignKey:'cityId'})
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
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model: "cities",
        key: 'id'
      }
    },
    pickUp:{
      type:DataTypes.STRING,
    },
    dropOff:{
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    microhauler:{
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    smartbins:{
     type: DataTypes.ARRAY(DataTypes.STRING),
    },
    comLaw:{
        type: DataTypes.BOOLEAN
    },
    resLaw:{
        type: DataTypes.BOOLEAN
    }
   
  }, {
    sequelize,
    tableName: 'counties',
    modelName: 'County',
    timestamps:false
  });

  return County;
};
