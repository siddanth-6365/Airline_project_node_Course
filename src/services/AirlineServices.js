const { AirlineRepo } = require("../repositories/index")
const { Logger } = require("../config")
const { AppError, AppErrors } = require("../utils/index")
const { StatusCodes } = require("http-status-codes")


const airlineRepo = new AirlineRepo() //creating an object of airline 

async function createAirline(data) {
    try {
        const newAirline = await airlineRepo.create(data) // passing the data to member function of class which inherits from crud parent class and recieves responce 
        return newAirline;
    }
    catch (err) {
        Logger.error("error in airline services: ", err)
        throw err;
    }
}

async function getAirplane(id) {
    try {
        const getairplane = await airlineRepo.get(id)
        return getairplane;
    }
    catch (error) {
        if (error.StatusCode == StatusCodes.NOT_FOUND) {
            throw new AppErrors("requested id not found ", StatusCodes.NOT_FOUND)
        }
        console.log("error inside get function in services ", error)
    }
}

async function getAllAirplane(data) {
    try {
        const getairplane = await airlineRepo.getAll(data)
        return getairplane;
    }
    catch (error) {
        console.log("error inside getAll function in services ", error)
    }
}

async function deleteAirplane(id) {
    try {
        const getairplane = await airlineRepo.destroy(id)
        return getairplane;
    }
    catch (error) {
        if (error.StatusCode == StatusCodes.NOT_FOUND) {
            throw new AppErrors("requested id not found ", StatusCodes.NOT_FOUND)
        }
        console.log("error inside get function in services ", error)
    }
}

async function updateAirline(id, data) {
    try {
        const updateairline = await airlineRepo.update(id, data)
        return updateairline;
    }
    catch (error) {
        if (error.StatusCode == StatusCodes.NOT_FOUND) {
            throw new AppErrors("requested id not found ", StatusCodes.NOT_FOUND)
        }
        console.log("error inside get function in services ", error)
    }
}


module.exports = {
    createAirline,
    getAirplane,
    getAllAirplane,
    deleteAirplane,
    updateAirline,
}