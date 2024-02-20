const { Router } = require('express')
const { user } = require('../handlers/crearUsuario')

const user = Router()

user.post('/crearUsuario', user)

module.exports = { user }