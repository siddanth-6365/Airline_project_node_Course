const { StatusCodes } = require("http-status-codes")
const { errorResponse } = require("../utils/common")

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

module.exports = { validateCreateRequest };
