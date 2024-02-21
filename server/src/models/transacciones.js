const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('transaccione', {
        ID_TRANSACCION: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        CUENTA_ORIGEN: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        CUENTA_DESTINO: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        VALOR_TRANSACCION: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        PASSWORD: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        FECHA_TRANSACCION: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: 0
        },
    }, { timestamps: false });
};