require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const modelUser = require('./models/user')
const modeltipoIdentificacion = require('./models/tipoDocument')
const modelTransaccion = require('./models/transacciones')

const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
   {
      logging: false,
      native: false,
   }
);

modelUser(sequelize)
modeltipoIdentificacion(sequelize)
modelTransaccion(sequelize)

const { usuarios, tipos_documentos, transacciones } = sequelize.models
usuarios.belongsTo(tipos_documentos, { foreignKey: 'TIPO_DOCUMENTO' })
tipos_documentos.hasOne(usuarios)


module.exports = {
   ...sequelize.models,
   conn: sequelize,
};