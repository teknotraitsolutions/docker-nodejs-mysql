'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('survey_start_time', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id'
                }
            },
            group_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'groups',
                    key: 'id'
                }
            },
            survey_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'survey',
                    key: 'id'
                }
            },
            progress_status: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: Sequelize.NOW
            }
        });
    },

    down: async(queryInterface, Sequelize) => {

        await queryInterface.dropTable('survey_start_time');

    }
};