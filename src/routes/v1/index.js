const express = require('express');

const AirlineRoutes = require("./Airline-routes")
const CityRoutes = require("./City-routes")
const AirportRoutes = require("./Airport-routes")
const FlightRoutes = require("./flight-routes")
const { InfoController } = require("../../controllers");



const router = express.Router();

router.get("/info",InfoController.info)

router.use("/airline", AirlineRoutes);
router.use("/city", CityRoutes);
router.use('/airport',AirportRoutes);
router.use('/flight',FlightRoutes);


module.exports = router;