const CrudOperations = require("./crud-repo")
const {City }= require("../models/index")   // remeber to destruct {City}

class CityRepo extends CrudOperations {
    constructor() {
        super(City) // super calls the parent constructor , here we are passing the model- airline to crud operations repo
    }
}
module.exports = CityRepo;
