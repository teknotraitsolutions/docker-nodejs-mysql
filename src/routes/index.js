//import express
const express = require("express");
const userRoutes = require("./userRoutes");

const router = express.Router();

router.get("/healthcheck", (req, res) => {
    const greeting = "Healthy";
    res.json(greeting);
});
// route for login
router.use("/user", userRoutes);

module.exports = router;