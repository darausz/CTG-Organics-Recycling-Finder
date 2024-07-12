'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('counties',{
      id:{
        allowNull:false,
        autoIncrement: true,
        primaryKey:true,
        type: Sequelize.INTEGER
      },
      name:{
        allowNull:false,
        type: Sequelize.STRING
      },
      pickUp:{  
        type: Sequelize.STRING
      },
      comLaw:{
        type:Sequelize.BOOLEAN
      },
      resLaw:{
        type:Sequelize.BOOLEAN
      },
      //start of daraus code
      city:{
        type:Sequelize.STRING,
      },
      state:{
        type:Sequelize.STRING,
      }
  
  
     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('counties');
  }
};
