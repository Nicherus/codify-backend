const { Sequelize } = require('sequelize');
const sequelize = require('../utils/database');

class Topic extends Sequelize.Model {}

Topic.init(
  {
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
    courseId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'courses',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'topic',
  },
);

module.exports = Topic;
