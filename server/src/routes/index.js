const { Router } = require('express');
const { users } = require('./user');
const { transacciones } = require('./transaccion');

// Importar todos los routers;
// Ejemplo: const { authRouter } = require('./auth.js');

const router = Router();

router.use('/user', users)
router.use('/transaccion', transacciones)


module.exports = router;