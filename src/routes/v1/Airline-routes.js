const express = require('express');

const { AirlineController } = require('../../controllers');

const router = express.Router();

console.log("we are at airline-routes");

//    /api/v1/airline
router.post('/', AirlineController.createAirline);

module.exports = router;