module.exports = (sequelize, DataTypes) => {
    // schema for questions table
    const IdeaScore = sequelize.define(
        'IdeaScore', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
                field: 'id'
            },
            idea_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'idea_id'
            },
            idea_score: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'idea_score'
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
            tableName: 'idea_scores',
            timestamps: false
        }
    );
    IdeaScore.associate = function(models) {
        IdeaScore.hasMany(models.Idea, { foreignKey: 'idea_id' });
        IdeaScore.hasMany(models.Users, { foreignKey: 'user_id' });
        IdeaScore.hasMany(models.Group, { foreignKey: 'group_id' });
        IdeaScore.hasMany(models.Survey, { foreignKey: 'survey_id' });
        IdeaScore.hasMany(models.Question, { foreignKey: 'question_id' });
    };
    return IdeaScore;
};