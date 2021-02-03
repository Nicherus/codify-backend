const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

class Course extends Sequelize.Model {}

Course.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  deleted: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  image: {
    type: Sequelize.STRING(10000),
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING(10000),
    allowNull: false,
  }
},
{
  sequelize,
  modelName: 'course',
});

module.exports = Course;
