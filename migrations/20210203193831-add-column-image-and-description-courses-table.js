'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('courses', 'image', {
      type: Sequelize.STRING(10000),
      allowNull: false
    });

    await queryInterface.addColumn('courses', 'description', {
      type: Sequelize.STRING(10000),
      allowNull: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('courses', 'image'),
    queryInterface.removeColumn('courses', 'description')
  }
};
