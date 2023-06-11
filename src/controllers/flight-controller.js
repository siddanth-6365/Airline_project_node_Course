const { FlightServices } = require("../services/index")
const { StatusCodes } = require("http-status-codes")
const { successResponse, errorResponse } = require("../utils/common")
const { AppErrors } = require("../utils/index")


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
            totalSeats: req.body.totalSeats
        });
        successResponse.message = 'Flight created successfully';
        successResponse.data = Flight;
        return res
            .status(StatusCodes.CREATED)
            .json(
                successResponse
            );
    }
    catch (error) {
        errorResponse.message = 'Flight not created, error in controller';
        errorResponse.error = error;
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                errorResponse
            })
    }
}

async function getAllFlights(req, res) {
    try {
        const Flight = await FlightServices.getAllFlights(req.query)
        successResponse.message = 'Flighst data reterived successfully';
        successResponse.data = Flight;
        return res
            .status(StatusCodes.CREATED)
            .json(
                successResponse
            );
    }
    catch (error) {
        errorResponse.message = error.message;
        errorResponse.error = { error }
        return res
            .status(error.StatusCode)
            .json({
                errorResponse
            })
    }
}




module.exports = {
    createFlight,
    getAllFlights

}