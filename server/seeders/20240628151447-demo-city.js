module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cities', [
      {
        id: 1,
        name: 'NYC',
        stateId: '1',
        
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cities', null, {});
  },
};