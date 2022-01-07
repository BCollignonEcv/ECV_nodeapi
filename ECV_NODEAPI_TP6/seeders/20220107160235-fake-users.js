'use strict';
const uuidv4 = require('uuid/v4');
const { Model } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        id: uuidv4(),
        lastname: "Collignon",
        firstname: "Baptiste",
        email: "baptiste.collignon@mail-ecv.fr",
        role: "Admin",
        username: "babagreno",
        githubUrl: "https://github.com/BCollignonEcv",
        createdAt: new Date(),
        updatedAt: new Date()
      }], 
    {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
