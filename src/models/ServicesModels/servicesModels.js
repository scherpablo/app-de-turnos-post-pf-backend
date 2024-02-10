const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Service", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    service_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    service_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    service_detail: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    isDelete: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
  });
};