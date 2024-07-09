module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('counties', [
        {
          id: 1,
          name: 'Queens',
          cityId:1,
          pickUp: 'Yes',
          comLaw:true,
          resLaw:true
        },
        {
          id:2,
          name: 'Manhattan',
          cityId:1,
          pickUp: 'some',
          comLaw: true,
          resLaw: true
        },
        {
          id:3,
          name: 'Brooklyn',
          cityId:1,
          pickUp:'yes',
          comLaw: true,
          resLaw: true
        },
        {
            id:4,
            name: 'Bronx',
            cityId:1,
            pickUp:'yes',
           
            comLaw: true,
            resLaw: true
        },
        {
            id: 5,
            name: 'Staten Island',
            cityId: 1,
            pickUp: 'Yes',
            
            comLaw: true,
            resLaw: true
        },
        {
            id: 6,
            name: 'District 3',
            cityId: 2,
            pickUp: 'yes',
            comLaw: true,
            resLaw: true
        },
        {
            id: 7,
            name: 'Downtown Omaha',
            cityId: 3,
            pickUp: 'no',
            comLaw: false,
            resLaw: false
        },
        {
            id: 8,
            name: 'Southwest Omaha',
            cityId: 3,
            pickUp: 'no',
            comLaw: false,
            resLaw: false
        },

        {
            id: 9,
            name: 'West Omaha',
            cityId: 3,
            pickUp: 'no',
            comLaw: false,
            resLaw: false
        }

      ]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('counties', null, {});
    },
  };