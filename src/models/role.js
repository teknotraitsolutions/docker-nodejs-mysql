module.exports = (sequelize, DataTypes) => {
    // schema for questions table
    const Role = sequelize.define(
        'Role', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
                field: 'id'
            },
            role_name: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'role_name'
            },
            status: {
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'status'
            }
        }, {
            tableName: 'roles',
            timestamps: false
        }
    );
    return Role;
};