module.exports = (sequelize, DataTypes) => {
    // schema for questions table
    const Idea = sequelize.define(
        'Idea', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
                field: 'id'
            },
            idea: {
                type: DataTypes.STRING(255),
                allowNull: false,
                field: 'idea'
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'user_id'
            },
            group_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'group_id'
            },
            survey_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'survey_id'
            },
            question_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'question_id'
            },
            save_draft: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'save_draft'
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: true,
                defaultValue: DataTypes.NOW,
                field: 'created_at'
            },
            created_by: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
                field: 'created_by'
            },
        }, {
            tableName: 'ideas',
            timestamps: false
        }
    );
    Idea.associate = function(models) {
        Idea.hasMany(models.Users, { foreignKey: 'user_id' });
        Idea.hasMany(models.Group, { foreignKey: 'group_id' });
        Idea.hasMany(models.Survey, { foreignKey: 'survey_id' });
        Idea.hasMany(models.Question, { foreignKey: 'question_id' });
    };
    return Idea;
};