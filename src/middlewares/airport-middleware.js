const { StatusCodes } = require("http-status-codes")
const { errorResponse } = require("../utils/common")

const validateCreateRequest = (req, res, next) => {
    if (!req.body.name || !req.body.code || !req.body.cityId ) {
        errorResponse.message = "something went wrong while creating airline"
        errorResponse.error = {
            explanation: "data required is not entered"
        }
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(errorResponse)
    }

    next();

}

module.exports = { validateCreateRequest };
