'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airports extends Model {

    static associate(models) {
      this.belongsTo(models.City, {
        foreignKey: 'cityId',
        onDelete: 'CASCADE',
        // onUpdate:'CASCADE'
      });

      this.hasMany(models.flight, {
        foreignKey: 'depature',
        onDelete: 'CASCADE',
      })
      this.hasMany(models.flight, {
        foreignKey: 'arrival',
        onDelete: 'CASCADE',
      })
    }
  }
  Airports.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    address: {
      type: DataTypes.STRING,
      unique: true
    },
    cityId: {
      type: DataTypes.STRING,
      allowNull: false,
      // no unique because one city can have many airports


    }
  }, {
    sequelize,
    modelName: 'Airports',
  });
  return Airports;
};