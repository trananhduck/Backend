'use strict';

const { UPDATE } = require("sequelize/lib/query-types");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      email: "admin@gmail.com",
      password: '123456', // plain text
      firstName: "John",
      lastName: "Doe",
      address: "USA",
      phonenumber: "01243",
      gender: 1,
      image: '/dad',
      roleId: 'R1',
      positionId: '1234',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
