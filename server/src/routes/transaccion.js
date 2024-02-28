const { Router } = require('express')
const { transaccion, transaccionHistory } = require('../handlers/transaccion')

const transacciones = Router()

transacciones.post('/crearTransaccion', transaccion)
transacciones.post('/historial', transaccionHistory)

module.exports = { transacciones }