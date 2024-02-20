const { Router } = require('express');
const { user } = require('./crearUsuario');

// Importar todos los routers;
// Ejemplo: const { authRouter } = require('./auth.js');

const router = Router();

router.use('/', user) 


module.exports = router;