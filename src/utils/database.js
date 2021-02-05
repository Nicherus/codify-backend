require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  ssl: {
    require: false,
    rejectUnauthorized: false,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
    }
  },
});

module.exports = sequelize;
