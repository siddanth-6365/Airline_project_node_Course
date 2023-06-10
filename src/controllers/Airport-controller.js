const { AirportServices } = require("../services/index")
const { StatusCodes } = require("http-status-codes")
const { successResponse, errorResponse } = require("../utils/common")
const { AppErrors } = require("../utils/index")


async function createAirport(req, res) {
    try {
        const Airport = await AirportServices.createAirport({
            name: req.body.name,
            code: req.body.code,
            address: req.body.address,
            cityId: req.body.cityId
        });
        successResponse.message = 'Airport created successfully';
        successResponse.data = Airport;
        return res
            .status(StatusCodes.CREATED)
            .json(
                successResponse
            );
    }
    catch (error) {
        errorResponse.message = 'Airport not created, error in controller';
        errorResponse.error = error;
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                errorResponse
            })
    }
}


async function getAirport(req, res) {
    try {
        const getAirport = await AirportServices.getAirplane(req.params.id)
        successResponse.message = 'Airport data of requested id retrive successfully';
        successResponse.data = getAirport;
        return res
            .status(StatusCodes.OK)
            .json({
                successResponse
            });
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

async function getAllAirport(req, res) {
    try {
        const getAirports = await AirportServices.getAllAirport()
        successResponse.message = 'Airport retrive/get successfully';
        successResponse.data = getAirports;
        return res
            .status(StatusCodes.OK)
            .json({
                successResponse
            });
    }
    catch (error) {
      
        errorResponse.message = "error in getAirport function in Airport-controller";
        errorResponse.error = error
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                errorResponse
            })
    }
}

async function destroyAirport(req, res) {
        try {
            const getAirport = await AirportServices.deleteAirport(req.params.id)
            successResponse.message = 'Airport data of requested id deleted successfully';
            successResponse.data = getAirport;
            return res
                .status(StatusCodes.OK)
                .json({
                    successResponse
                });
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

async function updateAirport(req, res) {
        try {
            const updateAirport = await AirportServices.updateAirport(req.params.id, req.body)
            successResponse.message = 'Airport data of requested id updated successfully';
            successResponse.data = updateAirport;
            return res
                .status(StatusCodes.OK)
                .json({
                    successResponse
                });
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
    createAirport,
    getAirport,
    getAllAirport,
    destroyAirport,
    updateAirport
}