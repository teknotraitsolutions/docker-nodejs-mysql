const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const logger = require("../logger/logger");
const basename = path.basename(__filename);
require('dotenv').config();

const dbhost = "3.13.160.134";
const dbName = "safetymentor";
const username = "root";
const password = "User1234567890";
const dbport = "3306";




console.log(dbhost, dbName, username, password)

const sequelize = new Sequelize(`mysql://${username}:${password}@${dbhost}:${dbport}/${dbName}`);

// // CONNECT TO DB
sequelize
    .authenticate()
    .then(() => {
        console.log(`Connection has successfully established`);
        logger.info(`DB Connection establisted : ${dbport}  `);
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
        logger.error(`Unable to connect with database`);
    });

const db = {};

fs.readdirSync(__dirname)
    .filter(file => {
        return file.indexOf('.') !== 0 && file !== basename &&
            file.slice(-3) === '.js';
    })
    .forEach(file => {
        //const model = sequelize.import(path.join(__dirname, file));
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
        // logger.debug(`model.name: ${model.name}`);
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;