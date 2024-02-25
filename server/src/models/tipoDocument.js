const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('tipos_documentos', {
        ID_TP_DOCUMENTO: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        NOMBRE_TP_DOCUMENTO: {
            type: DataTypes.STRING(10),
            allowNull: false
        }
    }, { timestamps: false });
};