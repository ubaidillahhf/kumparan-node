'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Articles', [{
      author: 'System',
      title: 'Title Example',
      body: 'This is Body Example',
      created_at:'2021-08-22 00:00:00',
      updated_at: '2021-08-22 00:00:00',
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Articles', null, {});
  }
};
