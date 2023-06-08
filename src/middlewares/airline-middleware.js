const { StatusCodes } = require("http-status-codes")
const { errorResponse } = require("../utils/common")

const validateCreateRequest = (req, res, next) => {
    if (!req.body.modelNumber) {
        errorResponse.message = "something went wrong while creating airline"
        errorResponse.error = {
            explanation: "Model Number is required"
        }
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(errorResponse)
    }

    next();

}

module.exports = { validateCreateRequest };
