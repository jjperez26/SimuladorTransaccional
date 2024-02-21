const { Router } = require('express')
const { transaccion } = require('../handlers/transaccion')

const transacciones = Router()

transacciones.post('/crearTransaccion', transaccion)

module.exports = { transaccion }