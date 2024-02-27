const { transacciones, usuarios, conn } = require('../db');

const crearTransaccion = async (CUENTA_ORIGEN, CUENTA_DESTINO, VALOR_TRANSACCION) => {
    const validarDestino = await usuarios.findOne({
        where: {
            NUMERO_CELULAR: CUENTA_DESTINO
        }
    });

    if (!validarDestino) {
        throw new Error('El número de destino no se encuentra registrado');
    }

    const validarSaldo = await usuarios.findOne({
        where: {
            NUMERO_CELULAR: CUENTA_ORIGEN
        }
    });

    if (!validarSaldo) {
        throw new Error('La cuenta de origen no se encuentra registrada');
    }

    if (validarSaldo.SALDO < VALOR_TRANSACCION) {
        throw new Error('El saldo tiene que ser menor a la transacción');
    }

    const newTransaccion = await transacciones.create({
        CUENTA_ORIGEN: CUENTA_ORIGEN,
        CUENTA_DESTINO: CUENTA_DESTINO,
        VALOR_TRANSACCION: VALOR_TRANSACCION,
    });

    // Restar el valor de la transacción de la cuenta de origen
    await usuarios.update({
        SALDO: validarSaldo.SALDO - VALOR_TRANSACCION
    }, {
        where: {
            NUMERO_CELULAR: CUENTA_ORIGEN
        },
    });

    // Sumar el valor de la transacción a la cuenta de destino
    await usuarios.update({
        SALDO: validarDestino.SALDO + VALOR_TRANSACCION
    }, {
        where: {
            NUMERO_CELULAR: CUENTA_DESTINO
        },
    });

    
    return newTransaccion;
};

module.exports = { crearTransaccion };
