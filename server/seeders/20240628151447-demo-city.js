module.exports = {
  up: async (queryInterface, Sequelize) => {
    const cities = [
      { id: 1, name: 'NYC', stateId: 1 },
      { id: 2, name: 'Seattle', stateId: 2 },
      { id: 3, name: 'Omaha', stateId: 3 }
    ];

    for (const city of cities) {
      const existingCity = await queryInterface.rawSelect('cities', {
        where: {
          id: city.id,
        },
      }, ['id']);

      if (!existingCity) {
        await queryInterface.bulkInsert('cities', [city], {});
      }
    }
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cities', null, {});
  },
};
