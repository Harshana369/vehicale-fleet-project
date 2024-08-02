const db = require("../models");

const addVehicle = async (req, res) => {
  try {
    // Create a new vehicle
    const newVehicle = await db.Vehicle.create(req.body);

    // Respond with the newly created vehicle
    res.status(200).json(newVehicle);
  } catch (error) {
    console.error("Error adding vehicle:", error);
    res
      .status(500)
      .json({ error: "An error occurred while adding the vehicle." });
  }
};

const updateVehicle = async (req, res) => {
  try {
    const { vehicleID } = req.params; // Vehicle ID from URL parameters

    // Find the vehicle by ID
    const vehicle = await db.Vehicle.findOne({ where: { vehicleID } });

    if (!vehicle) {
      return res.status(404).json({ error: "Vehicle not found" });
    }

    // Update the vehicle
    const [updated] = await db.Vehicle.update(req.body, {
      where: { vehicleID },
    });

    if (updated) {
      // Retrieve the updated vehicle
      const updatedVehicle = await db.Vehicle.findOne({ where: { vehicleID } });
      res.status(200).json(updatedVehicle);
    } else {
      res.status(400).json({ error: "Update failed" });
    }
  } catch (error) {
    console.error("Error updating vehicle:", error);
    res
      .status(500)
      .json({ error: "An error occurred while updating the vehicle." });
  }
};

const removeVehicle = async (req, res) => {
  try {
    const { vehicleID } = req.params; // Vehicle ID from URL parameters

    // Find the vehicle by ID
    const vehicle = await db.Vehicle.findOne({ where: { vehicleID } });

    if (!vehicle) {
      return res.status(404).json({ error: "Vehicle not found" });
    }
    // Delete the vehicle
    await db.Vehicle.destroy({ where: { vehicleID } });

    // Respond with success message
    res.status(200).json({ message: "Vehicle deleted successfully" });
  } catch (error) {
    console.error("Error deleting vehicle:", error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the vehicle." });
  }
};

const getAllVehicles = async (req, res) => {
  try {
    const getVehicles = await db.Vehicle.findAll();
    res.status(200).json(getVehicles);
  } catch (error) {
    console.error("Error getting vehicles:", error);
    res
      .status(500)
      .json({ error: "An error occurred while getting all vehicle." });
  }
};

module.exports = { addVehicle, updateVehicle, removeVehicle, getAllVehicles };
