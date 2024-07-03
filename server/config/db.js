const { Sequelize } = require('sequelize');
const config = require('./config'); // Adjust the path as needed

module.exports= new Sequelize('CommitToGreen','postgres','Mariana10!',{
    host:'localhost',
    dialect:'postgres',
    operatorsAliases:false,
    pool: {
        max: 5,
        min:0,
        acquire: 30000,
        idle: 10000
    },

});