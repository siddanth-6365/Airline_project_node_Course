"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class flight extends Model {
    static associate(models) {
      // this refers to current model
      this.belongsTo(models.Airline, {
        foreignKey: "Flightid",
      });
      this.belongsTo(models.Airports, {
        foreignKey: "depature",
      });
      this.belongsTo(models.Airports, {
        foreignKey: "arrival",
      });
    }
  }
  flight.init(
    {
      Flightid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      airline: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      depature: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      arrival: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      startTime: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      endTime: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      allowNull: false,
      Date: {
        allowNull: false,

        type: DataTypes.DATE,
      },
      Duration: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      noofStops: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "flight",
    }
  );

  return flight;
};
