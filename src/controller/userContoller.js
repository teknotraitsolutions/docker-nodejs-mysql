const userService = require("../services/userServices");
const CONSTANTS = require("../shared/constants");
const authService = require("../shared/auth.service");
const { validationResult } = require('express-validator');
const logger = require('../logger/logger');
const controllerMiddleware = require("../shared/controller.middleware");

//call back function to authenticate users
const login = async(req, res) => {
    // Express validator
    controllerMiddleware.expressValidation(req, res);

    try {
        //Call service file to add user
        let login = await userService.login(req.body);
        controllerMiddleware.controllerService(req, res, login);
    } catch (err) {
        logger.error(err);
        return res.status(CONSTANTS.CUSTOMS.ERROR).json({ msg: CONSTANTS.CUSTOMS.SOME_ERROR, error: err.message });
    }
};


module.exports = {
    login
}