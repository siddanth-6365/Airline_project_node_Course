'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
  
    static associate(models) {
      this.hasMany( models.Airports, {
        foreignKey: 'cityId' ,
        onDelete: 'CASCADE',
      })
    }
  }
  City.init({
    name:{
     type: DataTypes.STRING,
      allowNull :false,
      unique:true
    } 
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};