const { CityServices } = require("../services/index")
const { StatusCodes } = require("http-status-codes")
const { successResponse, errorResponse } = require("../utils/common")
const { AppErrors } = require("../utils/index")


async function createCity(req, res) {
    try {
        const city = await CityServices.createCity({
           name:req.body.name 
        } 
        );
        successResponse.message = 'City created successfully';
        successResponse.data = city;
        return res
            .status(StatusCodes.CREATED)
            .json(
                successResponse
            );
    }
    catch (error) {
        errorResponse.message = 'City not created, error in controller';
        errorResponse.error = error;
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                errorResponse
            })
    }
}

async function destroyCity(req, res) {
    try {
        const getCity = await CityServices.deleteCity(req.params.id)
        successResponse.message = 'City data of requested id deleted successfully';
        successResponse.data = getCity;
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

async function updateCity(req, res) {
    try {
        const updateCity = await CityServices.updateCity(req.params.id, req.body)
        successResponse.message = 'City data of requested id updated successfully';
        successResponse.data = updateCity;
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
    createCity,
    updateCity,
    destroyCity
}



