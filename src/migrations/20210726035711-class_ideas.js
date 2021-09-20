'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('class_ideas', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            idea_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'ideas',
                    key: 'id'
                }
            },
            idea: {
                type: Sequelize.TEXT('long'),
                allowNull: false
            },
            score: {
                type: Sequelize.INTEGER,
                allowNull: false
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
        });
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('class_ideas');
    }
};