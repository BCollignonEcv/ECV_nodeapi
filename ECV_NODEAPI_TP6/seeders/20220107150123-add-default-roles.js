'use strict';
const uuidv4 = require('uuid/v4');

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Roles', [{
        id: uuidv4(),
        name: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id: uuidv4(),
        name: 'Publisher',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Roles', null, {});
  }
};
