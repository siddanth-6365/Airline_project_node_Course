const { AirportRepo } = require("../repositories/index")
const { Logger } = require("../config")
const { AppError, AppErrors } = require("../utils/index")
const { StatusCodes } = require("http-status-codes")


const airportRepo = new AirportRepo()  

async function createAirport(data) {
    try {
        const newairport = await airportRepo.create(data) 
        return newairport;
    }
    catch (err) {
        Logger.error("error in airport services: ", err)
        throw err;
    }
}

async function getAirport(id) {
    try {
        const getAirport = await airportRepo.get(id)
        return getAirport;
    }
    catch (error) {
        if (error.StatusCode == StatusCodes.NOT_FOUND) {
            throw new AppErrors("requested id not found ", StatusCodes.NOT_FOUND)
        }
        console.log("error inside get function in services ", error)
    }
}

async function getAllAirport() {
    try {
        const getAirport = await airportRepo.getAll()
        return getAirport;
    }
    catch (error) {
        console.log("error inside getAll function in services ", error)
    }
}

async function deleteAirport(id) {
    try {
        const getAirport = await airportRepo.destroy(id)
        return getAirport;
    }
    catch (error) {
        if (error.StatusCode == StatusCodes.NOT_FOUND) {
            throw new AppErrors("requested id not found ", StatusCodes.NOT_FOUND)
        }
        console.log("error inside get function in services ", error)
    }
}

async function updateAirport(id, data) {
    try {
        const updateairport = await airportRepo.update(id, data)
        return updateairport;
    }
    catch (error) {
        if (error.StatusCode == StatusCodes.NOT_FOUND) {
            throw new AppErrors("requested id not found ", StatusCodes.NOT_FOUND)
        }
        console.log("error inside get function in services ", error)
    }
}


module.exports = {
    createAirport,
    getAirport,
    getAllAirport,
    deleteAirport,
    updateAirport,
}