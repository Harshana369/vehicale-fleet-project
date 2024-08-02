const express = require("express");
const router = express.Router();
const userRoutes = require("./userRoutes");
const vehicleRoutes = require("./vehicleRoutes");
const fuelCostRoutes = require("./fuelCostRoutes");

router.use("/users", userRoutes);
router.use("/vehicle", vehicleRoutes);
router.use("/fuelCost", fuelCostRoutes);

module.exports = router;
