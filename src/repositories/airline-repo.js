const CrudOperations = require("./crud-repo")
const Airline = require("../models/airline")

class AirlineRepo extends CrudOperations {
    constructor() {
        console.log("we are at airline-repo");
        super(Airline) // super calls the parent constructor , here we are passing the model- airline to crud operations repo
    }
}
module.exports = AirlineRepo;
