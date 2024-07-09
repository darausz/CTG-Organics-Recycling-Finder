'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('smartBins',{
      id:{
        allowNull:false,
        autoIncrement: true,
        primaryKey:true,
        type: Sequelize.INTEGER
      },
      countyId:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
        model: 'counties',
        key: 'id'
      },
      },
      name:{
        type: Sequelize.STRING
      },
      address:{
        type: Sequelize.STRING,
        allowNull: true
      },
      website:{
        type: Sequelize.STRING,
        allowNull: true
      },
      timeOpen:{
        type: Sequelize.STRING,
        allowNull: true
      },
      monthOpen:{
        type: Sequelize.STRING,
        allowNull: true
      },
      longitude:{
        type: Sequelize.FLOAT,
        allowNull: true
      },
      latitude:{
        type: Sequelize.FLOAT,
        allowNull: true
      }
    })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('smartBins');
  }
};
