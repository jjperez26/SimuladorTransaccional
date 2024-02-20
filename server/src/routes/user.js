const { Router } = require('express')
const { user } = require('../handlers/users')

const users = Router()

users.post('/crearUsuario', user)

module.exports = { users }