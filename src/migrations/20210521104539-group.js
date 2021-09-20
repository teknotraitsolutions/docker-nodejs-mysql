'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('groups', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            group_title: {
                type: Sequelize.STRING(50),
                allowNull: false
            },
            survey_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'survey',
                    key: 'id'
                }
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
        await queryInterface.dropTable('groups');
    }
};