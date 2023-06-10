const express = require("express");

const { AirportController } = require("../../controllers");
const { AirportMiddlewares } = require("../../middlewares");

const router = express.Router();

//    /api/v1/airport  POST request
router.post("/", 
AirportMiddlewares.validateCreateRequest,
AirportController.createAirport );

//    /api/v1/airport   GET request
router.get("/", AirportController.getAllAirport);

// localhost:3001/api/v1/airport/3  GET   getting data by primary key id we are passing 3
router.get("/:id", AirportController.getAirport);

router.delete("/:id", AirportController.destroyAirport);

router.patch("/:id", AirportController.updateAirport);

module.exports = router;
