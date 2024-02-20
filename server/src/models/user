const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('usuario', {
        NOMBRE_COMPLETO: {
            type: DataTypes.STRING(160),
            allowNull: false,
            unique: true
        },
        DOCUMENTO: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: true
        },
        CELULAR: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        CORREO: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        PASSWORD: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        DIRECCION: {
            type: DataTypes.STRING(50),
            allowNull: true,
            defaultValue: 0
        },
        SALDO: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        NUMERO_CUENTA: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        ESTADO_CUENTA: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        PERFIL: {
            type: DataTypes.STRING(20),
            defaultValue: true
        }
    }, { timestamps: false });
};