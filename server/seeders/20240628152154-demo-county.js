module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('counties', [
      {
        id: 1,
        name: 'Bronx',
        cityId: 1,
        pickUp: ['TestingPickup'],
        dropOff: ['random'],
        microhauler: ['textinghauler'],
        smartbins: ['smartbinlol'],
        comLaw:  true,
        resLaw:  true
        
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('counties', null, {});
  },
};