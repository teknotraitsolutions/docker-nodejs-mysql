'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('group_final_idea_scores', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            idea_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            idea_score: {
                type: Sequelize.INTEGER,
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
            question_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'questions',
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
            }
        });
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('group_final_idea_scores');
    }
};