module.exports = (sequelize, DataTypes) => {
    // schema for user table
    const Users = sequelize.define(
        'Users', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
                field: 'id'
            },
            first_name: {
                type: DataTypes.STRING(50),
                allowNull: false,
                field: 'first_name'
            },
            last_name: {
                type: DataTypes.STRING(50),
                allowNull: false,
                field: 'last_name',
            },
            email: {
                type: DataTypes.STRING(200),
                allowNull: false,
                field: 'email'
            },
            role_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'role_id'
            },
            password: {
                type: DataTypes.STRING(255),
                allowNull: false,
                field: 'password'
            },
            status: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
                field: 'status'
            },
            is_deleted: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
                field: 'is_deleted'
            },
            set_password_token: {
                type: DataTypes.STRING(255),
                allowNull: true,
                field: 'set_password_token'
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
            tableName: 'users',
            timestamps: false
        }
    );
    Users.associate = function(models) {
        Users.hasOne(models.Role, { foreignKey: 'role_id' })
    };
    return Users;
};