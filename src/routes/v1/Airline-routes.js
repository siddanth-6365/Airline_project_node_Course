const express = require('express');

const { AirlineController } = require('../../controllers');
const { AirlineMiddlewares } = require("../../middlewares")

const router = express.Router();

//    /api/v1/airline  POST request
router.post('/',
    AirlineMiddlewares.validateCreateRequest,
    AirlineController.createAirline
);

//      /api/v1/airline   GET request
router.get('/',
    AirlineController.getAllAirline,
)


// localhost:3001/api/v1/airline/3  GET   getting data by primary key id we are passing 3 
router.get('/:id',
    AirlineController.getAirline,
)

router.delete('/:id',
    AirlineController.destroyAirplane);

router.patch('/:id', AirlineController.updateAirplane);


module.exports = router;