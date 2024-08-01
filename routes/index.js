const express = require("express");
const router = express.Router();
const userRoutes = require("./userRoutes");
const vehicleRoutes = require("./vehicleRoutes");

router.use("/users", userRoutes);
router.post("/vehicle", vehicleRoutes);

module.exports = router;
