const { Sequelize } = require('sequelize');
const sequelize = require('../utils/database');

class User extends Sequelize.Model {}

User.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    type: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
  },
<<<<<<< HEAD
  {
    sequelize,
    modelName: 'user',
  },
);
=======
{
  sequelize,
  modelName: 'user',
});
>>>>>>> ac13074d97b3b602a37f8bbabe593a4f4e55519e

module.exports = User;
