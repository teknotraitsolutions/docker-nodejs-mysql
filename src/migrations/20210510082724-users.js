'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('users', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            first_name: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            last_name: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            email: {
                type: Sequelize.STRING(200),
                allowNull: false
            },
            role_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'roles',
                    key: 'id'
                }
            },
            password: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            status: {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            is_deleted: {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            set_password_token: {
                type: Sequelize.STRING(255),
                allowNull: true
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: Sequelize.NOW
            },
            created_by: {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: Sequelize.NOW
            },
            updated_by: {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 0
            },
        });
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('users');
    }
};