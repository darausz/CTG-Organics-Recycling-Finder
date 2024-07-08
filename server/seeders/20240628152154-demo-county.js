module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('counties', [
        {
          id: 1,
          name: 'Queens',
          cityId:1,
          pickUp: 'Yes',
          dropOff: ['New Roots Community Garden, 4206 69th St Woodside NY 11377, https://sites.google.com/view/newrootsqueens/home, newrootsqueens@gmail.com, Sunday 12pm-1pm Tuesday Thursday 6pm-7pm, (929) 356-5372 , April-October' ,' Queens Botanical Garden Public Food Scrap Drop-Off, 42-80 Crommelin Avenue Flushing NY 11355, https://queensbotanical.org/compost-fsdo/, info@queensbotanical.org, Everyday 8am-5pm, (718) 886-3800', 'St. Anastasia Roman Catholic Church, 245-0-245-32 Northern Blvd Douglaston, NY 11362, https://www.sta.nyc/, info@sta.nyc , Friday 8am-12pm Saturday 12pm-12:30pm, (718)631-4454' ],
          microhauler: ['no'],
          smartbins: ['NE CO 64 St & 39 Ave','NW CO 54 St & Skillman Ave', 'SE CO 31 St & 31 Ave' ],
          comLaw:true,
          resLaw:true
        },
        {
          id:2,
          name: 'Manhattan',
          cityId:1,
          pickUp: 'some',
          dropOff: [ 'LES Ecology Center , Grand Street & Clinton Street,  https://www.lesecologycenter.org, info@lesecologycenter.org, Monday 9am-2pm, (212) 477-4022', 'Hudson River Park, 211 12th Ave New York NY 10014,  https://hudsonriverpark.org/the-park/sustainability/community-compost-program/, info@hrpt.ny.gov, Everyday 7am-7pm,  (212)242-6427', 'Carver Community Garden, 242 East 124th St'],
          microhauler: ['Reclaimed Organics, none, https://www.reclaimedorganics.org, info@reclaimedorganics.org'],
          smartbins: ['SE CO 2 Ave & E 20 St', 'NW CO W 63 St & Central Park W','NE CO Convent Ave & W 130 St'],
          comLaw: true,
          resLaw: true
        },
        {
          id:3,
          name: 'Brooklyn',
          cityId:1,
          pickUp:'yes',
          dropOff: ['PS 90 Coney Island,  2840 W 12th Street Brooklyn NY 11224,  https://www.ps90coneyisland.org/,  none,  Wednesday 7:30am-10:30am , (718) 787-3333', ' Los Colibríes Community Garden , 219 34th Street Brooklyn NY 11232 ,https://www.facebook.com/jardin34/, sunsetparkgarden@gmail.com, Sunday 11am-4am,' , ' ENY Youth Farm,  620 Schenck Ave, https://ucceny.org/enyf/compost/,  none, 24/7, (718) 649-7979,  March-September'],
          microhauler: [' BK Rot,  none, https://www.bkrot.org/'],
          smartbins: ['NE CO Bushwick Ave & Vanderveer St', ' NW CO Howard Ave & Marion St','NE CO Underhill Ave & Eastern ParkwayNE CO Underhill Ave & Eastern Parkway'],
          comLaw: true,
          resLaw: true
        },
        {
            id:4,
            name: 'Bronx',
            cityId:1,
            pickUp:'yes',
            dropOff: ['NYC Department of sanitation ,NW CO Bainbridge Ave & E Mosholu Parkway S ,https://www.nyc.gov/site/dsny/collection/residents/food-scrap-drop-off.page , none , 24/7 , 311' , 'Compost at New Roots Community Farm ,670 Grand Concourse The Bronx NY 10451, none , Monday 9am-2p, none' ,'Bronx Park East Farmers Market , 2222 Bronx Park East Bronx NY 10462, none, none, June-November'],
            microhauler: ['GreenFeen OrganiX , none, greenfeenorganix.com, none , (917) 727-4453',' EarthKind, around NYC ,https://www.earthkindcompost.com/ , none'],
            smartbins: ['Gate 8: Bedford Park Blvd West & Paul Ave Bronx, NY 10468', 'NW CO Bainbridge Ave & E Mosholu Parkway S', 'SE CO Kings College Pl & Gun Hill Rd '],
            comLaw: true,
            resLaw: true
        },
        {
            id: 5,
            name: 'Staten Island',
            cityId: 1,
            pickUp: 'Yes',
            dropOff: ['H.E.A.L.T.H for Youths Skyline Community Garden, 1 Clyde Place , 24/7, none', 'Grymes Hill Wagner College , 1 Campus Rd Staten Island NY 10301 , wagner.edu , none , 24/7', ' Staten Island Mall Greenmarket, 1 Campus Rd, Staten Island NY 10301 , snug-harbor.org , none , Saturdays 8am -2pm , none'],
            microhauler: ['Ecofairy LLC, NYC, https://theecofairy.com/ , none '],
            smartbins: ['NW CO Houston St & Willowbrook Road', 'SE CO Stuyvesant Place & Schuyler St', 'NE CO Vermont Ave & Hylan Blvd', 'NW CO Innis St& St Josephs AveNW CO Innis St& St Josephs Ave '],
            comLaw: true,
            resLaw: true
        },
        {
            id: 6,
            name: 'District 3',
            cityId: 2,
            pickUp: 'yes',
            dropOff: ['friendly earth international, 1560 1st Ave South Seattle WA 98134 , https://friendlyearth.org/our-services/residential-services/ ,9am-5pm ,(206) 367-4111'],
            microhauler: [' Happy Hauler, P.O. Box 70884 Seattle WA 98127, https://happyhauler.com/contact-us/,admin@happyhauler.com, (206) 784-0313', 'Green Junk Removing and Hauling Services, Seattle WA ,https://firmtechservices.com/376-appliance-removal-seattle-wa#about ,sa615615615@gmail.com, (206) 742-1535 '],
            smartbins: ['no'],
            comLaw: true,
            resLaw: true
        },
        {
            id: 7,
            name: 'Downtown Omaha',
            cityId: 3,
            pickUp: 'no',
            dropOff: ['Soil Dynamics Yard,  1725 Avenue G Omaha NE 68110,  https://www.soil-dynamics.com/drop,  admin@soil-dynamics.com, Monday-Friday 8am-3p, (402) 332-4710 Ext. 5'],
            microhauler: [ 'Hillside Solutions, PO Box 810, Gretna NE 68028,  https://www.hillside.solutions/,  hello@hillside.solutions, (402) 332-4710 ext 4'],
            smartbins: ['no'],
            comLaw: false,
            resLaw: false
        },
        {
            id: 8,
            name: 'Southwest Omaha',
            cityId: 3,
            pickUp: 'no',
            dropOff: ['no'],
            microhauler: ['Hillside Solutions, PO Box 810 Gretna NE 68028, https://www.hillside.solutions/, hello@hillside.solutions, (402) 332-4710 ext 4', 'Gretna Sanitation,  PO Box 810 Gretna NE 68028,  https://www.gretnasanitation.com,  none,  (402)-332-4710 '],
            smartbins: ['no'],
            comLaw: false,
            resLaw: false
        },

        {
            id: 9,
            name: 'West Omaha',
            cityId: 3,
            pickUp: 'no',
            dropOff: ['no'],
            microhauler: ['Hillside Solutions, PO Box 810 Gretna NE 68028, https://www.hillside.solutions/, hello@hillside.solutions, (402) 332-4710 ext 4', 'Gretna Sanitation ,PO Box 810 Gretna NE 68028, https://www.gretnasanitation.com ,none,  (402)-332-4710'],
            smartbins:['no'],
            comLaw: false,
            resLaw: false
        }

      ]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('counties', null, {});
    },
  };