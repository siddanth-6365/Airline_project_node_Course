"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("flights", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Flightid: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "airlines",
          key: "id",
        },
        onDelete: "cascade",
      },
      depature: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "airports",
          key: "code",
        },
        onDelete: "cascade",
      },
      arrival: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "airports",
          key: "code",
        },
        onDelete: "cascade",
      },
      startTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      endTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      Duration: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      noofStops: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("flights");
  },
};
