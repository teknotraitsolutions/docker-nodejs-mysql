'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

      await queryInterface.createTable('roles',
          { 
            id:{
              type:Sequelize.INTEGER,
              autoIncrement:true,
              primaryKey:true,
              allowNull: false
            },
            role_name:{
              type:Sequelize.STRING(50),
              allowNull: false
            },
            status:{
              type:Sequelize.INTEGER,
              allowNull: false
            }
          }
      );

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('roles');
  }
};
