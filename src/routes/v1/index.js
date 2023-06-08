const express = require('express');


const AirlineRoutes = require("./Airline-routes")
const CityRoutes = require("./City-routes")


const router = express.Router();



router.use("/airline", AirlineRoutes);
router.use("/city", CityRoutes);


module.exports = router;