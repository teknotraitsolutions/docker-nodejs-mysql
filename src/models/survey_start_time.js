module.exports = (sequelize, DataTypes) => {
    // schema for questions table
    const SurveyStartTime = sequelize.define(
        'SurveyStartTime', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
                field: 'id'
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
            progress_status: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'progress_status'
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: true,
                defaultValue: DataTypes.NOW,
                field: 'created_at'
            }
        }, {
            tableName: 'survey_start_time',
            timestamps: false
        }
    );
    SurveyStartTime.associate = function(models) {
        SurveyStartTime.hasMany(models.Users, { foreignKey: 'user_id' });
        SurveyStartTime.hasMany(models.Group, { foreignKey: 'group_id' });
        SurveyStartTime.hasMany(models.Survey, { foreignKey: 'survey_id' });
    };
    return SurveyStartTime;
};