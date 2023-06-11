const CrudOperations = require("./crud-repo")
const { Flight } = require("../models/index")

class CityRepo extends CrudOperations {
    constructor() {
        super(Flight)
    }

    async getAllFlights(filter,sort) {
        const response = await Flight.findAll({
            where: filter,
            order: sort
        });
        return response;

    }
}
module.exports = CityRepo;
