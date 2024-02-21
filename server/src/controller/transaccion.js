const axios = require('axios')
const { transacciones } = require('../db')

const crearTransaccion = async (CUENTA_ORIGEN, CUENTA_DESTINO, VALOR_TRANSACCION) => {
    const newTransaccion = await transacciones.create({
        CUENTA_ORIGEN: CUENTA_ORIGEN,
        CUENTA_DESTINO: CUENTA_DESTINO,
        VALOR_TRANSACCION: VALOR_TRANSACCION,
    })

    return newTransaccion
}

module.exports = { crearTransaccion }