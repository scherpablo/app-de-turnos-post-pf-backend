const {DataTypes} = require ("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Quotes", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
          },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        hour: {
            type: DataTypes.NUMBER,
            allowNull: false,
        }
    })
}