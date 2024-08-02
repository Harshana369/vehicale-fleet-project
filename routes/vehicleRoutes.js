const express = require("express");
const vehicle = require("../controllers/vehicleController");

const router = express.Router();

router.post("/", vehicle.addVehicle);
router.put("/:vehicleID", vehicle.updateVehicle);
router.delete("/:vehicleID", vehicle.removeVehicle);
router.get("/allVehicles", vehicle.getAllVehicles);

module.exports = router;
