module.exports = (sequelize, DataTypes) => {
    // schema for questions table
    const Question = sequelize.define(
        'Question', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
                field: 'id'
            },
            question_title: {
                type: DataTypes.STRING(50),
                allowNull: false,
                field: 'question_title'
            },
            description: {
                type: DataTypes.STRING(255),
                allowNull: false,
                field: 'description'
            },
            survey_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'survey_id'
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
            updated_at: {
                type: DataTypes.DATE,
                allowNull: true,
                defaultValue: DataTypes.NOW,
                field: 'updated_at'
            },
            updated_by: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
                field: 'updated_by'
            },
        }, {
            tableName: 'questions',
            timestamps: false
        }
    );
    Question.associate = function(models) {
        Question.hasMany(models.Survey, { foreignKey: 'survey_id' })
    };
    return Question;
};