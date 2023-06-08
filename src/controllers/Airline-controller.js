const { AirlineServices } = require("../services/index")
const { StatusCodes } = require("http-status-codes")
const { successResponse, errorResponse } = require("../utils/common")
const { AppErrors } = require("../utils/index")


async function createAirline(req, res) {

    try {
        // passing data to createairline member function in services 
        // recieves the responce from airline service
        const airline = await AirlineServices.createAirline({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        }
        );
        successResponse.message = 'Airline created successfully';
        successResponse.data = airline;
        return res
            .status(StatusCodes.CREATED)
            .json(
                successResponse
            );
    }
    catch (error) {
        errorResponse.message = 'Airline not created, error in controller';
        errorResponse.error = error;
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                errorResponse
            })
    }

}


async function getAirline(req, res) {
    try {
        const getairline = await AirlineServices.getAirplane(req.params.id)
        successResponse.message = 'Airline data of requested id retrive successfully';
        successResponse.data = getairline;
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

async function getAllAirline(req, res) {
    try {
        const getairline = await AirlineServices.getAllAirplane()
        successResponse.message = 'Airline retrive/get successfully';
        successResponse.data = getairline;
        return res
            .status(StatusCodes.OK)
            .json({
                successResponse
            });
    }
    catch (error) {
        // console.log("error in getAirline function in airline-controller ", error)
        errorResponse.message = "error in getAirline function in airline-controller";
        errorResponse.error = error
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                errorResponse
            })
    }
}

    async function destroyAirplane(req, res) {
        try {
            const getairline = await AirlineServices.deleteAirplane(req.params.id)
            successResponse.message = 'Airline data of requested id deleted successfully';
            successResponse.data = getairline;
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

    async function updateAirplane(req, res) {
        try {
            const updateairline = await AirlineServices.updateAirline(req.params.id, req.body)
            successResponse.message = 'Airline data of requested id updated successfully';
            successResponse.data = updateairline;
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
    createAirline,
    getAirline,
    getAllAirline,
    destroyAirplane,
    updateAirplane
}