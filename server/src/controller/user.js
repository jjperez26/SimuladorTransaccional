const { usuarios } = require('../db')

const crearUsuario = async (NOMBRE_USUARIO, DOCUMENTO, TIPO_DOCUMENTO, NUMERO_CELULAR,
    CORREO, PASSWORD, DIRECCION, SALDO, ESTADO_CUENTA, PERFIL) => {
    const newUser = await usuarios.create({
        NOMBRE_USUARIO: NOMBRE_USUARIO,
        DOCUMENTO: DOCUMENTO,
        TIPO_DOCUMENTO: TIPO_DOCUMENTO,
        NUMERO_CELULAR: NUMERO_CELULAR,
        CORREO: CORREO,
        PASSWORD: PASSWORD,
        DIRECCION: DIRECCION,
        SALDO: SALDO,
        ESTADO_CUENTA: ESTADO_CUENTA,
        PERFIL: PERFIL
    })

    return newUser
}

module.exports = { crearUsuario }