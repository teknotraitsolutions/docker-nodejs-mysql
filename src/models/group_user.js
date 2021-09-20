module.exports = (sequelize, DataTypes) => {
    // schema for questions table
    const GroupUser = sequelize.define(
        'GroupUser', {
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
            tableName: 'group_users',
            timestamps: false
        }
    );
    GroupUser.associate = function(models) {
        GroupUser.hasMany(models.Users, { foreignKey: 'user_id' });
        GroupUser.hasMany(models.Group, { foreignKey: 'group_id' })
    };
    return GroupUser;
};