const CONSTANTS = require("./constants");
const logger = require('../logger/logger');
const { validationResult } = require('express-validator');

// Express validator response
const expressValidation = async(req, res) => {
    const error = validationResult(req);
    // validate the sent request
    if (!error.isEmpty()) {
        //if their are errors in the request print the errors
        return res.status(CONSTANTS.CUSTOMS.ERROR).json({ "Error": error });
    }
}

// Common controller response
const controllerService = async(req, res, parameter) => {
    if (parameter.status === CONSTANTS.CUSTOMS.ERROR) {
        logger.error(parameter.message);
        return res.status(CONSTANTS.CUSTOMS.ERROR).json({ msg: parameter.message });
    } else if (parameter.status === CONSTANTS.CUSTOMS.SUCCESS) {
        logger.info(parameter.message);
        return res.status(CONSTANTS.CUSTOMS.SUCCESS).json({ msg: parameter.message, data: parameter.data });
    } else {
        logger.error(CONSTANTS.CUSTOMS.SOMETHING_WRONG);
        return res.status(CONSTANTS.CUSTOMS.ERROR).json({ msg: CONSTANTS.CUSTOMS.SOMETHING_WRONG });
    }
}

module.exports = {
    controllerService,
    expressValidation
}