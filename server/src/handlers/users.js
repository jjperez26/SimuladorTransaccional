const { crearUsuario, loginController, usersListController } = require("../controller/user")

const user = async (req, res) => {
    const { NOMBRE_USUARIO, DOCUMENTO, TIPO_DOCUMENTO, NUMERO_CELULAR,
        CORREO, PASSWORD, DIRECCION, SALDO, ESTADO_CUENTA, PERFIL
    } = req.body
    try {
        const result = await crearUsuario(NOMBRE_USUARIO, DOCUMENTO, TIPO_DOCUMENTO, NUMERO_CELULAR,
            CORREO, PASSWORD, DIRECCION, SALDO, ESTADO_CUENTA, PERFIL)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const login = async (req, res) => {
    const { NUMERO_CELULAR, PASSWORD } = req.body
    try {
        const result = await loginController(NUMERO_CELULAR, PASSWORD)
        console.log(result);
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const usersList = async (req, res) => {
    try {
        const result = await usersListController()
        console.log(result)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    user,
    login,
    usersList
}