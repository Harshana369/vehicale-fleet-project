const express = require("express");
const {
  addFuelCost,
  updateFuelCost,
} = require("../controllers/fuelCostController");

const router = express.Router();
router.post("/", addFuelCost);
router.put("/:fid", updateFuelCost);

module.exports = router;
