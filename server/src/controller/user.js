const axios = require('axios')
//const { pokemon, type } = require('../db')
const { Op } = require('sequelize')

const crearUsuario = async (nombreCompleto, numeroDocumento, celular, correoElectronico,
    contraseña, direccion, saldo, numeroCuenta, habilitada, perfil) => {
    const newUser = await user.create({
        nombreCompleto: nombreCompleto,
        numeroDocumento: numeroDocumento,
        celular: celular,
        correoElectronico: correoElectronico,
        contraseña: contraseña,
        direccion: direccion,
        saldo: saldo,
        numeroCuenta: numeroCuenta,
        habilitada: habilitada,
        perfil: perfil
    })
}

module.exports = { crearUsuario }