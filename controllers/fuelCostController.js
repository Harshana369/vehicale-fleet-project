const db = require("../models");

const addFuelCost = async (req, res) => {
  try {
    // Adding new fuel cost
    const newFuelCost = await db.FuelCost.create(req.body);

    res.status(200).json(newFuelCost);
  } catch (error) {
    console.log("Error Adding fuel cost:", error);
    res.status(500).json({ error: "An error occured while adding fuel cost." });
  }
};

const updateFuelCost = async (req, res) => {
  try {
    const { fid } = req.params;
    // find the fuel by id
    const fuelId = await db.FuelCost.findOne({ where: { fid } });

    if (!fuelId) {
      return res.status(404).json({ error: "Fuel ID not found" });
    }

    // update the fuel records
    const [updated] = await db.FuelCost.update(req.body, {
      where: { fid },
    });

    if (updated) {
      // Retrieve the updated fuel cost
      const updatedFuelCost = await db.FuelCost.findOne({ where: { fid } });
      res.status(200).json(updatedFuelCost);
    } else {
      res.status(400).json({ error: "update failed" });
    }
  } catch (error) {
    console.log("Error updatig the Fuel cost", error);
    res
      .status(500)
      .json({ error: "An error occured while updating the fuel cost" });
  }
};

module.exports = { addFuelCost, updateFuelCost };
