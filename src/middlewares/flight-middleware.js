const { StatusCodes } = require("http-status-codes")
const { errorResponse } = require("../utils/common")
const { AppErrors} = require("../utils")
 
const validateCreateRequest = (req, res, next) => {
    const x = new Date(req.body.departureTime);
    const y = new Date(req.body.arrivalTime);
    if(x>y){
        errorResponse.message = "something went wrong while creating flight"
        errorResponse.error = {
            explanation: "depature time should be less than arrival time"
        }
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(errorResponse)
    }
    next();
}

function validateUpdateSeatsRequest(req, res, next) {
    if(!req.body.seats) {
        errorResponse.message = 'Something went wrong while creating flight';
        errorResponse.error = new AppErrors(['seats not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(errorResponse);
    }
    next();
}

module.exports = { validateCreateRequest,validateUpdateSeatsRequest };
