const { crearUsuario } = require("../controller/user")

const user = async (req, res) => {
    const { NOMBRE_USUARIO, DOCUMENTO, TIPO_DOCUMENTO, NUMERO_CELULAR, 
        CORREO, PASSWORD, DIRECCION, SALDO, ESTADO_CUENTA, PERFIL 
    } = req.body
    try {
        const result = crearUsuario(NOMBRE_USUARIO, DOCUMENTO, TIPO_DOCUMENTO, NUMERO_CELULAR, 
            CORREO, PASSWORD, DIRECCION, SALDO, ESTADO_CUENTA, PERFIL)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    user
}