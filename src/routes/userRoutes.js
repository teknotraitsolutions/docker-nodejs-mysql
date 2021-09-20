const express = require("express");
const validation = require("../shared/validation");
const userRoutes = express.Router();
const userController = require('../controller/userContoller');
const authService = require("../shared/auth.service");

//post method for login
userRoutes.post('/login', validation.loginValidate, userController.login);

module.exports = userRoutes;