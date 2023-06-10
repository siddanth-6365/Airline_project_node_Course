const { flightRepo } = require("../repositories/index")
const { Logger } = require("../config")
const { AppError, AppErrors } = require("../utils/index")
const { StatusCodes } = require("http-status-codes")
const { error } = require("../utils/common/success-response")


const FlightRepo = new flightRepo()

async function createFlight(data) {
    try {
        const x = new Date(data.departureTime);
        const y = new Date(data.arrivalTime);
        if(x<y){
            const newFlight = await FlightRepo.create(data)
            return newFlight;
        }
        else {
            console.log("departureTime should be less than arrivalTime")
            throw new AppErrors("departureTime should be less than arrivalTime")
            
        }
        
    }
    catch (err) {
        Logger.error("error in Flight services: ", err)
        throw err;
    }
}


module.exports = {
    createFlight,

}