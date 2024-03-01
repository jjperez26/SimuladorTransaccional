const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('transacciones', {
        ID_TRANSACCION: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        CUENTA_ORIGEN: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        CUENTA_DESTINO: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        VALOR_TRANSACCION: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        FECHA_TRANSACCION: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW
        },
    }, { timestamps: false });
};