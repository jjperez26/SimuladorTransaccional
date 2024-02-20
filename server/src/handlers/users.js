const { crearUsuario } = require("../controller/user")

const user = async (req, res) => {
    const { nombreCompleto, numeroDocumento, celular, correoElectronico, 
        contraseña, direccion, saldo, numeroCuenta, habilitada, perfil 
    } = req.body
    try {
        res.status(200).json(crearUsuario)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    user
}