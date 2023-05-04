const { AirlineServices}  = require("../services/index")
const { StatusCodes } = require("http-status-codes")

async function createAirline(req, res) {

    try {
        console.log("we are inside airline-controller");
        const data = {
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        }

        const airline = await AirlineServices.createAirline(data);
        return res
            .status(StatusCodes.CREATED)
            .json({
                success: true,
                message: "created successfully airline",
                data: airline,
                error:{}
            });

    }
    catch (error) {
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                success: false,
                message: "error while creating in airline-controller airline",
            })
    }

}

module.exports = { createAirline }