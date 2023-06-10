const express = require("express");

const { FlightController } = require("../../controllers");
const { AirportMiddlewares } = require("../../middlewares");

const router = express.Router();

//    /api/v1/airport  POST request
router.post( "/",
  FlightController.createFlight
);

// router.get("/", FlightController.getAllAirport);

// router.get("/:id", FlightController.getAirport);

// router.delete("/:id", FlightController.destroyAirport);

// router.patch("/:id", FlightController.updateAirport);

module.exports = router;
