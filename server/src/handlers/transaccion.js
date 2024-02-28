const { crearTransaccion, transaccionHistoryController } = require("../controller/transaccion")

const transaccion = async (req, res) => {
    const { CUENTA_ORIGEN, CUENTA_DESTINO, VALOR_TRANSACCION } = req.body
    try {
        const result = await crearTransaccion(CUENTA_ORIGEN, CUENTA_DESTINO, VALOR_TRANSACCION)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const transaccionHistory = async (req, res) => {
    const { CELULAR } = req.body
    console.log('Número de celular recibido:', CELULAR);
    try {
        const result = await transaccionHistoryController(CELULAR)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    transaccion,
    transaccionHistory
}