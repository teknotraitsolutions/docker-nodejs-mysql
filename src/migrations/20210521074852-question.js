'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('questions', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            question_title: {
                type: Sequelize.STRING(200),
                allowNull: false
            },
            description: {
                type: Sequelize.TEXT('long'),
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
        await queryInterface.dropTable('questions');
    }
};