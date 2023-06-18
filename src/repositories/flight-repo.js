const CrudOperations = require("./crud-repo");
const { Flight, Airports, Airline, City } = require("../models/index");
const { Sequelize } = require("sequelize");

class CityRepo extends CrudOperations {
  constructor() {
    super(Flight);
  }

  async getAllFlights(filter, sort) {
    const response = await Flight.findAll({
      where: filter,
      order: sort,
      include: [
        {
          model: Airline,
          as: "Airline_Details",
          required: true,
        },
        {
          model: Airports,
          as: "DepatureAirport_Details",
          // generally if we will not use on: then it inner join with default with id but when we need your custom attribute to join then we use this on:
          on: {
            col1: Sequelize.where(
              Sequelize.col("flight.departureAirportId"),
              "=",
              Sequelize.col("DepatureAirport_Details.code")
            ),
          },
          include: {
            model: City,
            required: true,
          },
        },
        {
          model: Airports,
          as: "ArrivalAirport_Details",
          on: {
            col1: Sequelize.where(
              Sequelize.col("flight.arrivalAirportId"),
              "=",
              Sequelize.col("ArrivalAirport_Details.code")
            ),
            col2: Sequelize.where(
              Sequelize.col("flight.arrivalAirportId"),
              "=",
              Sequelize.col("ArrivalAirport_Details.code")
            ),
          },
          include: {
            model: City,
            required: true,
          },
        },
      ],
    });
    return response;
  }

  async updateRemainingSeats(flightId, seats, dec = true) {
    const flight  = await Flight.findByPk(flightId);
    if (dec) {
      const decreaseSeats = await flight.decrement('totalSeats', { by: seats });
      return decreaseSeats; 
    } else {
      const IncreaseSeats = await flight.increment("totalSeats", { by: seats });
      return IncreaseSeats;
    }
  }
}
module.exports = CityRepo;
