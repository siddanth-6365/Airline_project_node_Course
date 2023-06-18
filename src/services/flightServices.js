const { flightRepo } = require("../repositories/index");
const { Logger } = require("../config");
const { AppErrors } = require("../utils/index");
const { errorResponse } = require("../utils/common");
const { StatusCodes } = require("http-status-codes");
const { error } = require("../utils/common/success-response");
const { Op } = require("sequelize");
const { Airports } = require("../models/index");

const FlightRepo = new flightRepo();

async function createFlight(data) {
  try {
    const newFlight = await FlightRepo.create(data);
    return newFlight;
  } catch (err) {
    Logger.error("error in Flight services: ", err);
    throw err;
  }
}

async function getAllFlights(query) {
  let customFilter = {};
  let sortFilter = [];

  const endingTripTime = "23:59:00";
  // trips=MUM-DEL
  if (query.trips) {
    [departureAirportId, arrivalAirportId] = query.trips.split("-");
    customFilter.departureAirportId = departureAirportId;
    customFilter.arrivalAirportId = arrivalAirportId;

    // TODO: add a check that they are not same
    if (departureAirportId === arrivalAirportId) {
      throw new AppErrors(
        "departureAirport and arrivalAirport can't be same",
        StatusCodes.BAD_REQUEST
      );
    }
  }

  if (query.price) {
    [minprice, maxprice] = query.price.split("-");
    customFilter.price = {
      [Op.between]: [
        minprice,
        maxprice == undefined ? (maxprice = "100000") : maxprice,
      ],
    };
    // if only one params is passed the set max value as something
  }

  if (query.travellers) {
    customFilter.totalseats = {
      [Op.gte]: query.travellers,
    };
    // here in flight model total seats means remaining seats so we are passing the no of tickets to book and checking wheather the no of seats available
  }

  if (query.tripDate) {
    customFilter.departureTime = {
      [Op.between]: [
        query.tripDate + "T00:00:00.000Z",
        query.tripDate + "T23:59:00.000Z",
      ],
    };
  }

  if (query.sort) {
    //if sort=departureTime_ASC,price_ASC
    const params = query.sort.split(",");
    const sortFilters = params.map((param) => param.split("_"));
    sortFilter = sortFilters;
    // console.log(sortFilter);
    //  (2) [Array(2), Array(2)]
    // console.log(sortFilter[0])
    // (2) ['departureTime', 'ASC']
  }

  try {
    const flights = await FlightRepo.getAllFlights(customFilter, sortFilter);
    // obj.code = flights.departureAirportId
    return flights;
  } catch (error) {
    throw new AppErrors(
      "Cannot fetch data the flights",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getFlight(id) {
  try {
    const getflight = await FlightRepo.get(id);
    return getflight;
  } catch (error) {
    if (error.StatusCode == StatusCodes.NOT_FOUND) {
      throw new AppErrors("requested id not found ", StatusCodes.NOT_FOUND);
    }
    console.log("error inside get function in flight services ", error);
  }
}

async function updateSeats(data) {
  try {
    const respond = await FlightRepo.updateRemainingSeats(
      data.flightId,
      data.seats,
      data.dec
    );
    return respond;
  } catch (error) {
    console.log(error)

    throw new AppErrors(
      "error inside update function in flight services",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createFlight,
  getAllFlights,
  getFlight,
  updateSeats,
};
