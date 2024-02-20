const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const { authRouter } = require('./auth.js');

const router = Router();

router.use('/ejemplo1', ejemplo1) //esto ejenmplos deben de ser importador de los archivos de rutas
router.use('/ejemplo2', ejemplo2)


module.exports = router;