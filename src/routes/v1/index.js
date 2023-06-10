const express = require('express');

const AirlineRoutes = require("./Airline-routes")
const CityRoutes = require("./City-routes")
const AirportRoutes = require("./Airport-routes")
const FlightRoutes = require("./flight-routes")


const router = express.Router();

router.use("/airline", AirlineRoutes);
router.use("/city", CityRoutes);
router.use('/airport',AirportRoutes);
router.use('/flight',FlightRoutes);


module.exports = router;