require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const modelUser = require('./models/user')

const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
   {
      logging: false,
      native: false,
   }
);

modelUser(sequelize)



module.exports = {
   ...sequelize.models, 
   conn: sequelize,
};