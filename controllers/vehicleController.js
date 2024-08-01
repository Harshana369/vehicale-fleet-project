const Vehicle = require("../models/vehicle");

const addVehicle = async (req, res) => {
  try {
    const { make, model, year, color, mileage, vin } = req.body;

    // Validate input
    if (!make || !model || !year || !vin) {
      return res
        .status(400)
        .json({ error: "Make, model, year, and VIN are required." });
    }

    // Create a new vehicle
    const newVehicle = await Vehicle.create({
      make,
      model,
      year,
      color,
      mileage,
      vin,
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

exports = addVehicle;
