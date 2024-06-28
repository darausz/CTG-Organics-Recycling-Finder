module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('states', [
      {
        id: 1,
        name: 'New York',
        abbreviation: 'NY',
        
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('states', null, {});
  },
};