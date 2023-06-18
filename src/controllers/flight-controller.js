const { FlightServices } = require("../services/index");
const { StatusCodes } = require("http-status-codes");
const { successResponse, errorResponse } = require("../utils/common");
const { AppErrors } = require("../utils/index");

async function createFlight(req, res) {
  try {
    const Flight = await FlightServices.createFlight({
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
      boardingGate: req.body.boardingGate,
      totalSeats: req.body.totalSeats,
    });
    successResponse.message = "Flight created successfully";
    successResponse.data = Flight;
    return res.status(StatusCodes.CREATED).json(successResponse);
  } catch (error) {
    errorResponse.message = "Flight not created, error in controller";
    errorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errorResponse,
    });
  }
}

async function getAllFlights(req, res) {
  try {
    const Flights = await FlightServices.getAllFlights(req.query);
    successResponse.message = "Flighst data reterived successfully";
    successResponse.data = Flights;
    return res.status(StatusCodes.CREATED).json(successResponse);
  } catch (error) {
    errorResponse.message = error.message;
    errorResponse.error = { error };
    return res.status(error.StatusCode).json({
      errorResponse,
    });
  }
}

async function getFlight(req, res) {
  try {
    const flight = await FlightServices.getFlight(req.params.id);
    successResponse.message = "Flight data reterive successfully";
    successResponse.data = flight;
    return res.status(StatusCodes.CREATED).json(successResponse);
  } catch (err) {
    errorResponse.message = err.message;
    errorResponse.data = { err };
    return res.status(err.StatusCode).json(errorResponse);
  }
}

async function updateSeats(req, res) {
  try {
    const respond = await FlightServices.updateSeats({
      flightId: req.params.id,
      seats: req.body.seats,
      dec: req.body.dec,
    });
    successResponse.message = "Flight data updated successfully";
    successResponse.data = respond;
    return res.status(StatusCodes.CREATED).json(successResponse);
  } catch (err) {
    errorResponse.message = err.message;
    errorResponse.data = { err };
    return res.status(err.StatusCode).json(errorResponse);
  }
}

module.exports = {
  createFlight,
  getAllFlights,
  getFlight,
  updateSeats,
};
