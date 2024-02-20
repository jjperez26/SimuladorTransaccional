const { Router } = require('express');
const { users } = require('./user');

// Importar todos los routers;
// Ejemplo: const { authRouter } = require('./auth.js');

const router = Router();

router.use('/user', users) 


module.exports = router;