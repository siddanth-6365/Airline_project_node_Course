'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.addConstraint('airports', {
      fields: ['cityId'],  // the attribute
      type: 'foreign key',
      name: 'cityID_FK',
      references: { //Required field
        table: 'cities',
        field: 'id'
      },
      onDelete: 'cascade',
      // onUpdate: 'cascade'
    });
    
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('airports', 'cityID_FK')
  }
};
