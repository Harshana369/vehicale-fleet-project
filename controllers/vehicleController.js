const db = require("../models");

const addVehicle = async (req, res) => {
  try {
    const {
      vehicleID,
      vehicleName,
      vehicleModel,
      vehicleBrand,
      vehicleYear,
      vehicleRegistrationNo,
      vehicleMileage,
      vehicleStatus,
    } = req.body;

    // Create a new vehicle
    const newVehicle = await db.Vehicle.create({
      vehicleID,
      vehicleName,
      vehicleModel,
      vehicleBrand,
      vehicleYear,
      vehicleRegistrationNo,
      vehicleMileage,
      vehicleStatus,
    });

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
