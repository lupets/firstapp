'use stric';
module.exports = (sequelize, DataTypes) => {
    var Lead = sequelize.define('Lead', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,

            allowNull: false, 
            parimaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Lead
};