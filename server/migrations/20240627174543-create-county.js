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
      cityId:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'cities', 
          key: 'id'       
        },
      },
      pickUp:{
        
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      dropOff:{
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      microhauler:{
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      smartbins:{
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      comLaw:{
        type:Sequelize.BOOLEAN
      },
      resLaw:{
        type:Sequelize.BOOLEAN
      },
  
  
     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('counties');
  }
};
