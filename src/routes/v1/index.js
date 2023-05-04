const express = require('express');

const { InfoController } = require('../../controllers');
const AirlineRoutes = require("./Airline-routes")

const router = express.Router();


console.log("we are at v1-routes");

router.use("/airline", AirlineRoutes);

// router.get('/info', InfoController.info);

module.exports = router;