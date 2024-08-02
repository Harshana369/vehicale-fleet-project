module.exports = (sequelize, DataTypes) => {
  const FuelCost = sequelize.define("FuelCost", {
    fid: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fuelType: {
      type: DataTypes.STRING,
    },
    fuelCostPerLiter: {
      type: DataTypes.DECIMAL,
    },
    effectiveDate: {
      type: DataTypes.DATE,
    },
  });
  return FuelCost;
};
