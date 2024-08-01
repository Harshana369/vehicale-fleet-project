const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db/connection"); // This imports the sequelize instance

const db = {};

db.Sequelize = Sequelize; // Making the Sequelize class available in db object
db.sequelize = sequelize; // Making the sequelize instance available in db object

// Load models
db.User = require("./user")(sequelize, DataTypes);
db.Vehicle = require("./vehicle")(sequelize, DataTypes);

module.exports = db;
