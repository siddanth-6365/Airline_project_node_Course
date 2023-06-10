const CrudOperations = require("./crud-repo")
const {Flight }= require("../models/index")   

class CityRepo extends CrudOperations {
    constructor() {
        super(Flight) 
    }
}
module.exports = CityRepo;
