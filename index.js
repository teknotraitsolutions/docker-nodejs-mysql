//import express for routing
const express = require("express");
const cors = require('cors');
const morgan = require("morgan");
const logger = require("./src/logger/logger");
const swaggerUi = require('swagger-ui-express');
const ApiRoutes = require("./src/routes/index");

//import body-parser
const bodyParser = require("body-parser");
//import http
const http = require("http");
//import dotenv
require('dotenv').config();
const CronJob = require('cron').CronJob;

const app = express();
const jsonParser = bodyParser.json()
const request = require('request');

app.use(cors());

// Swagger Documentation
app.server = http.createServer(app);

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));


app.use(jsonParser);

// CronJob For check time expiry
// const job = new CronJob('*/30 * * * * *', function() {
//     console.log('CronJob For check time expiry');
//     let host_url = process.env.HOST_URL;
//     request.post(host_url + '/survey/checkExpiry', function(error, response, body) {
//         if (!error && response.statusCode == 200) {
//             console.log(body)
//         }
//     });
// });
// job.start();
// app.use('/', function(req, res) {
//     res.json("Working");
// });

app.use('/api', ApiRoutes);

// HTTP request logger middleware for node.js
app.use(morgan("dev"));

app.use((error, req, res, next) => {
            logger.error(`${404} - ${`No route found`} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.use((req, res) => {
    res.status(404).json({
      message: `Route ${req.url} Not found.`
    });
  });

app.listen(process.env.PORT,(req,res)=>{
  logger.info(`${200} - ${`server running on port`} ${process.env.PORT}`);
  console.log(`The server is running on port :`,process.env.PORT);
})