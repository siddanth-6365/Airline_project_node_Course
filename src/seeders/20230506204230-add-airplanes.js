"use strict";
const { Op } = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("airlines", [
      {
        modelNumber: "goAir",
        capacity: 290,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "AirIndia",
        capacity: 180,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("airlines", {
      [Op.or]: [{ modelNumber: "AirIndia" }, { modelNumber: "goAir20" }],
    });
  },
};
