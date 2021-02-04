module.exports = {
  up: async (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn(
      'users',
      'type',
      {
        type: Sequelize.STRING,
        allowNull: false,
      },
    ),
  ]),

  down: async (queryInterface, Sequelize) => Promise.all([
    queryInterface.removeColumn('users', 'type'),
  ]),
};
