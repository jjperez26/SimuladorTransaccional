const { Router } = require('express');
const { users } = require('./user');
const { transaccion } = require('./transaccion');

// Importar todos los routers;
// Ejemplo: const { authRouter } = require('./auth.js');

const router = Router();

router.use('/user', users)
router.use('/transaccion', transaccion)


module.exports = router;