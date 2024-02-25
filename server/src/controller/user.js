const { usuarios } = require('../db');
const user = require('../models/user');

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

const loginController = async (NUMERO_CELULAR, PASSWORD) => {
    const usuario = await usuarios.findOne({
        where: {
            NUMERO_CELULAR: NUMERO_CELULAR
        },
        attributes: ['PASSWORD', 'PERFIL']
    });
    if (!usuario) {
        return {
            VALOR: false,
            PERFIL: false
        };
    }
    if (usuario.PASSWORD === PASSWORD) {
        return {
            VALOR: true,
            PERFIL: usuario.PERFIL
        };
    } else {
        return {
            VALOR: false,
            PERFIL: false
        };
    }
};

const usersListController = async () => { 
    const users = await usuarios.findAll({
        attributes: ['NOMBRE_USUARIO', 'SALDO', 'ESTADO_CUENTA']
    })

    return {
        NOMBRE_USUARIO: users.NOMBRE_USUARIO,
        SALDO: users.SALDO,
        ESTADO_CUENTA: users.ESTADO_CUENTA
    }
}

module.exports = {
    crearUsuario,
    loginController, 
    usersListController
}