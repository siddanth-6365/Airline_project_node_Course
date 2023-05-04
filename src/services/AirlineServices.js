const { AirlineRepo } = require("../repositories/index")
const { Logger } = require("../config")

const airlineRepo = new AirlineRepo() //creating an object

async function createAirline(data) {
    try {
        console.log("we are inside airline-services");

        const newAirline = await airlineRepo.create(data)
        return newAirline;
    }
    catch (err) {
        Logger.error("error in airline services ", err)
        throw err;
    }
}

module.exports = { 
    createAirline
 }