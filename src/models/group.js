module.exports = (sequelize, DataTypes) => {
    // schema for questions table
    const Group = sequelize.define(
        'Group', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
                field: 'id'
            },
            group_title: {
                type: DataTypes.STRING(50),
                allowNull: false,
                field: 'group_title'
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
            tableName: 'groups',
            timestamps: false
        }
    );
    Group.associate = function(models) {
        Group.hasMany(models.Survey, { foreignKey: 'survey_id' })
    };
    return Group;
};