const { crearUsuario, loginController, usersListController, editUserController, userControllerName} = require("../controller/user")

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
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const usersList = async (req, res) => {
    const {NUMERO_CELULAR}=req.query
    try {

        if(NUMERO_CELULAR){
        const result = await userControllerName(NUMERO_CELULAR)
        res.status(200).json(result)
        }
        else{
        const result = await usersListController()
        res.status(200).json(result)
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const editUser = async (req, res) => {
    const {NUMERO_CELULAR, ESTADO_CUENTA} = req.body
    try {
        const result = await editUserController(NUMERO_CELULAR, ESTADO_CUENTA)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    user,
    login,
    usersList, 
    editUser
}