const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./models");
const routes = require("./routes");

const vehicleRoutes = require("./routes/vehicleRoutes");

// Middleware
app.use(bodyParser.json()); // For parsing application/json
app.use(express.json());

app.use("/api", routes);
app.use("/vehicle", vehicleRoutes);

db.sequelize
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
