const Sequelize = require("sequelize");
const db = require("../models/index");

// Including models
const { Users } = db.sequelize.models;
const bcrypt = require("bcryptjs");
// including constant file
const CONSTANTS = require('../shared/constants');
const logger = require('../logger/logger');
const short = require('short-uuid');
require('dotenv').config();


//authenticates only registered users
const login = async(req, res) => {
    const email = req.email;
    const password = req.password;
    var userdetails = [];

    try {
        const getUser = await Users.findAll({
            attributes: [
                "id",
                "email",
                "first_name",
                "password",
                "last_name",
                "role_id",
                "status",
                "is_deleted"
            ],
            where: {
                email
            },
            raw: true
        });

        if (getUser.length) {
            const hashpassword = bcrypt.compareSync(password, getUser[0].password);
            if (hashpassword) {
                return { status: CONSTANTS.CUSTOMS.SUCCESS, message: "User logged in" };
            } else {
                return { status: CONSTANTS.CUSTOMS.ERROR, message: CONSTANTS.CUSTOMS.INVALID_CRED, error: CONSTANTS.CUSTOMS.INVALID_CRED };
            }
        } else {
            return { status: CONSTANTS.CUSTOMS.ERROR, message: CONSTANTS.CUSTOMS.INVALID_CRED, error: CONSTANTS.CUSTOMS.INVALID_CRED };
        }
    } catch (err) {
        logger.error(err);
        return { status: CONSTANTS.CUSTOMS.ERROR, message: CONSTANTS.CUSTOMS.SOME_ERROR, error: err.message };
    }
};



module.exports = {
    login
};