const { CityRepo } = require("../repositories/index")
const { Logger } = require("../config")
const { AppError, AppErrors } = require("../utils/index")
const { StatusCodes } = require("http-status-codes")


const cityrepo = new CityRepo() //creating an object of City 

async function createCity(data) {
    try {
        const newCity = await cityrepo.create(data) 
        return newCity;
    }
    catch (err) {
        Logger.error("error in City services: ", err)
        throw err;
    }
}

async function deleteCity(id) {
    try {
        const getCity = await cityrepo.destroy(id)
        return getCity;
    }
    catch (error) {
        if (error.StatusCode == StatusCodes.NOT_FOUND) {
            throw new AppErrors("requested id not found ", StatusCodes.NOT_FOUND)
        }
        console.log("error inside get function in services ", error)
    }
}

async function updateCity(id, data) {
    try {
        const updateCity = await cityrepo.update(id, data)
        return updateCity;   }
    catch (error) {
        if (error.StatusCode == StatusCodes.NOT_FOUND) {
            throw new AppErrors("requested id not found ", StatusCodes.NOT_FOUND)
        }
        console.log("error inside get function in services ", error)
    }
}

module.exports = {
    createCity,
    deleteCity,
    updateCity
}