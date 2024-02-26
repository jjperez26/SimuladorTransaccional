const { Router } = require('express')
const { user, login, usersList, editUser } = require('../handlers/users')

const users = Router()

users.get('/', usersList)
users.put('/', editUser)
users.post('/login', login)
users.post('/crearUsuario', user)

module.exports = { users }