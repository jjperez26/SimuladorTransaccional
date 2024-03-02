const { DataTypes } = require('sequelize');
const { Sequelize } = require('sequelize');

module.exports = (sequelize) => {
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
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            get() {
                const fechaUTC = this.getDataValue('FECHA_TRANSACCION');
                if (fechaUTC) {
                    const options = { timeZone: 'America/Bogota', hour12: false };
                    return fechaUTC.toLocaleString('es-CO', options);
                } else {
                    return null;
                }
            }
        },
    }, { timestamps: false });
};
