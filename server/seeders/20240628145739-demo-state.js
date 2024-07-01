module.exports = {
  up: async (queryInterface, Sequelize) => {
    const states = [
      { id: 1, name: 'New York', abbreviation: 'NY' },
      { id: 2, name: 'Washington', abbreviation: 'W' },
      { id: 3, name: 'Nebraska', abbreviation: 'N' },
    ];

    for (const state of states) {
      const existingState = await queryInterface.rawSelect('states', {
        where: {
          id: state.id,
        },
      }, ['id']);

      if (!existingState) {
        await queryInterface.bulkInsert('states', [state], {});
      }
    }
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('states', null, {});
  },
};
