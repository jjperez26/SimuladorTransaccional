const { usuarios } = require('../db');

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
        attributes: ['PASSWORD', 'PERFIL', 'ESTADO_CUENTA', 'NOMBRE_USUARIO', 'SALDO']
    });
    if (!usuario) {
        return {
            VALOR: false,
            PERFIL: false,
            ESTADO_CUENTA: 'Numero de celular no encontrado'
        };
    }
    if (usuario.PASSWORD === PASSWORD) {
        return {
            VALOR: true,
            PERFIL: usuario.PERFIL,
            ESTADO_CUENTA: usuario.ESTADO_CUENTA,
            NOMBRE_USUARIO: usuario.NOMBRE_USUARIO,
            SALDO: usuario.SALDO
        };
    } else {
        return {
            VALOR: false,
            PERFIL: false,
            ESTADO_CUENTA: usuario.ESTADO_CUENTA
        };
    }
};

const usersListController = async () => {
    const users = await usuarios.findAll({
        attributes: ['NOMBRE_USUARIO', 'NUMERO_CELULAR', 'SALDO', 'ESTADO_CUENTA']
    })

    const userList = users.map(user => ({
        NOMBRE_USUARIO: user.NOMBRE_USUARIO,
        NUMERO_CELULAR: user.NUMERO_CELULAR,
        SALDO: user.SALDO,
        ESTADO_CUENTA: user.ESTADO_CUENTA
    }));

    return userList
}

const editUserController = async (NUMERO_CELULAR, ESTADO_CUENTA) => {
    const user = await usuarios.findOne({ where: { NUMERO_CELULAR } });
    await user.update({ ESTADO_CUENTA });
    return {
        NOMBRE_USUARIO: user.NOMBRE_USUARIO,
        NUMERO_CELULAR: user.NUMERO_CELULAR,
        SALDO: user.SALDO,
        ESTADO_CUENTA: ESTADO_CUENTA
    };
}
const userControllerName = async (NUMERO_CELULAR) =>{
    const user = await usuarios.findOne({ where: { NUMERO_CELULAR } });
    return {
        NOMBRE_USUARIO: user.NOMBRE_USUARIO,
        NUMERO_CELULAR: user.NUMERO_CELULAR,
        SALDO: user.SALDO,
        ESTADO_CUENTA: user.ESTADO_CUENTA
    };
}

module.exports = {
    crearUsuario,
    loginController,
    usersListController,
    editUserController,
    userControllerName
}