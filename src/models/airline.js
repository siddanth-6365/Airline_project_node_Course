"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Airline extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     this.hasMany( models.flight , {
    foreignKey: 'Flightid',
    onDelete:'CASCADE',
     })
    }
  } 
  Airline.init(
    {
      modelNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capacity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Airline",
    }
  );
  
  return Airline;
};
