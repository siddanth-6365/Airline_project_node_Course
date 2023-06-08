const CrudOperations = require("./crud-repo")
const {Airline }= require("../models/index")   // remeber to destruct {airline}

class AirlineRepo extends CrudOperations {
    constructor() {
        super(Airline) // super calls the parent constructor , here we are passing the model- airline to crud operations repo
    }
}
module.exports = AirlineRepo;
