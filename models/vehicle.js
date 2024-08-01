module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define("Vehicle", {
    vehicleID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vehicleName: {
      type: DataTypes.STRING,
      vehicleModel: {
        type: DataTypes.STRING,
      },
      vehicleBrand: {
        type: DataTypes.STRING,
      },
      vehicleYear: {
        type: DataTypes.STRING,
      },
      vehicleRegistrationNo: {
        type: DataTypes.STRING,
      },
      vehicleMileage: {
        type: DataTypes.FLOAT,
      },
      vehicleStatus: {
        type: DataTypes.STRING,
      },
    },
  });
  return Vehicle;
};
