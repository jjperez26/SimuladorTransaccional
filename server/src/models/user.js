const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('usuarios', {
        NOMBRE_USUARIO: {
            type: DataTypes.STRING(160),
            allowNull: false,
            unique: true
        },
        DOCUMENTO: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: true
        },
        TIPO_DOCUMENTO: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        NUMERO_CELULAR: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        CORREO: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        PASSWORD: {
            type: DataTypes.STRING(30),
            allowNull: false,
            defaultValue: 0
        },
        DIRECCION: {
            type: DataTypes.STRING(50),
            allowNull: true,
            defaultValue: 0
        },
        SALDO: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ESTADO_CUENTA: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        PERFIL: {
            type: DataTypes.STRING(20),
            allowNull: false
        }
    }, { timestamps: false });
};