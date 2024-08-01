module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define("Vehicle", {
    vehicleID: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    vehicleName: {
      type: DataTypes.STRING,
    },
    vehicleModel: {
      type: DataTypes.STRING,
    },
    vehicleBrand: {
      type: DataTypes.STRING,
    },
    vehicleYear: {
      type: DataTypes.INTEGER,
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
  });
  return Vehicle;
};
