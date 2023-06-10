const CrudOperations = require("./crud-repo")
const {Airports }= require("../models/index")   // remeber to destruct {airline}

class AirlineRepo extends CrudOperations {
    constructor() {
        super(Airports) 
    }
}
module.exports = AirlineRepo;
