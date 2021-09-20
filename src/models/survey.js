module.exports = (sequelize, DataTypes) => {
    // schema for Survey table
    const Survey = sequelize.define(
        'Survey', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
                field: 'id'
            },
            name: {
                type: DataTypes.STRING(50),
                allowNull: false,
                field: 'name'
            },
            status: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
                field: 'status'
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
            tableName: 'survey',
            timestamps: false
        }
    );
    return Survey;
};