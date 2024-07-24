module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('counties', [
      {
        id: 1,
        name: 'Queens',
        
        city: "New York City",
        state: "New York",
        pickUp: 'Yes',
        comLaw: true,
        resLaw: true
      },
      {
        id: 2,
        name: 'New York',
        city: "New York City",
        state: "New York",
        
        pickUp: 'some',
        comLaw: true,
        resLaw: true
      },
      {
        id: 3,
        name: 'Brooklyn',
        city: "New York City",
        state: "New York",
       
        pickUp: 'yes',
        comLaw: true,
        resLaw: true
      },
      {
        id: 4,
        name: 'The Bronx',
        city: "New York City",
        state: "New York",
     
        pickUp: 'yes',

        comLaw: true,
        resLaw: true
      },
      {
        id: 5,
        name: 'Staten Island',
        city: "New York City",
        state: "New York",
        
        pickUp: 'Yes',

        comLaw: true,
        resLaw: true
      },
      {
        id: 6,
        name: 'King',
        city: "Seattle",
        state: "Washington",

        pickUp: 'yes',
        comLaw: true,
        resLaw: true
      },
      {
        id: 7,
        name: 'Douglas',
        city: "Omaha",
        state: "Nebraska",

        pickUp: 'no',
        comLaw: false,
        resLaw: false
      },
      

    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('counties', null, {});
  },
};