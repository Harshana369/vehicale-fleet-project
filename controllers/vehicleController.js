const db = require("../models");

const addVehicle = async (req, res) => {
  try {
    // Create a new vehicle
    const newVehicle = await db.Vehicle.create(req.body);

    // Respond with the newly created vehicle
    res.status(201).json(newVehicle);
  } catch (error) {
    console.error("Error adding vehicle:", error);
    res
      .status(500)
      .json({ error: "An error occurred while adding the vehicle." });
  }
};

module.exports = addVehicle;
