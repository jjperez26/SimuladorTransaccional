const { Router } = require('express')
const { user, login, usersList, editUser } = require('../handlers/users')

const users = Router()

users.get('/', usersList)
<<<<<<< HEAD
users.put('/', editUser)
=======
>>>>>>> 63fedb0b7594069541f44c2a33c97c3e57006572
users.post('/login', login)
users.post('/crearUsuario', user)

module.exports = { users }